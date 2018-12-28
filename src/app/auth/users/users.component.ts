import { User } from '../../models/user';
import { Chart } from 'angular-highcharts';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/auth.service';
import { ServerService } from 'src/app/server.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public roles: any;
  public chart: Chart;
  public users: number;
  public roleId: number;
  public current: number;
  public iterate: number;
  public currentUser: User;
  public showChart: boolean;
  private formValid: boolean;
  public hidePassword: boolean;
  public nameControl: FormControl;
  public emailControl: FormControl;
  public displayedColumns: string[];
  public passwordControl: FormControl;
  public dataSource: MatTableDataSource<User>;
  public createUserBtnOption: MatProgressButtonOptions;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private auth: AuthService,
    private snackbar: MatSnackBar,
    private server: ServerService
  ) {
    this.showChart = false;
    this.currentUser = this.auth.currentUser();
    this.current = null;
    this.formValid = true;
    this.roleId = 1;
    this.roles = [
      { id: 1, name: 'Administrasi' },
      { id: 2, name: 'Staff Gudang' },
      { id: 3, name: 'Direktur Operasional' }
    ];
    this.hidePassword = true;
    this.createUserBtnOption = {
      active: false,
      text: 'Create User',
      spinnerSize: 19,
      raised: true,
      stroked: true,
      buttonColor: 'primary',
      spinnerColor: 'accent',
      fullWidth: true,
      disabled: false,
      mode: 'indeterminate',
    };
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.minLength(6)
    ]);
    this.emailControl =  new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6)
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.iterate = 1;
    this.displayedColumns = ['position', 'name', 'email', 'options'];
    this.users = 0;
  }

  ngOnInit() {
    this.initTable();
    this.initChart();
  }

  public initChart() {
    this.chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'User Group by Role'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Users',
        data: [{
          name: 'Administrasi',
          y: 4,
        }, {
          name: 'Staff Gudang',
          y: 14
        }, {
          name: 'Direktur Operasional',
          y: 2,
          sliced: true,
          selected: true
        }]
      }]
    });
  }

  public initTable() {
    const ELEMENT_DATA = [];
    this.server.userAll().subscribe((users) => {
      users.forEach(user => {
        ELEMENT_DATA.push({
          position: this.iterate++,
          id: user.user.id,
          name: user.user.name,
          email: user.user.email,
          role_id: user.user.role.id
        });
      });
      this.dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.users = this.dataSource.data.length;
    });
  }

  public refreshTable() {
    this.iterate = 1;
    this.initTable();
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public editUser(position: number) {
    const current = this.dataSource.data[position - 1];
    this.current = position -  1;
    this.emailControl.reset({ value: current.email, disabled: true });
    this.nameControl.setValue(current.name);
    this.createUserBtnOption.buttonColor = 'accent';
    this.createUserBtnOption.spinnerColor = 'primary';
    this.createUserBtnOption.text = 'Update User';
    this.roleId = current.role_id;
  }

  public submitForm() {
    if (this.current === null) {
      this.createUser();
    } else {
      this.updateUser(this.current);
    }
  }

  public updateUser(position: number) {
    if (this.formIsValid()) {
      const user: User = {
        id: this.dataSource.data[position].id,
        name: this.nameControl.value,
        email: this.emailControl.value,
        password: this.passwordControl.value,
        role_id: this.roleId
      };
      this.createUserBtnOption.active = true;
      this.server.updateUser(user).subscribe((response) => {
        switch (response.code) {
          case 200:
            this.createUserBtnOption.active = false;
            this.snackbar.open('Successfully update a User', 'Close', {
              duration: 3000
            });
            const data = this.dataSource.data;
            data[position].name = response.user.name;
            data[position].role_id = this.roleId;
            this.dataSource.data = data;
            this.formToPristine();
            break;
        }
      });
    } else {
      this.formToDirty();
    }
  }

  public createUser() {
    if (this.formIsValid()) {
      this.dataSource.data.filter(data => {
        if (data.email === this.emailControl.value) {
          this.snackbar.open('Email is duplicate', 'Close', {
            duration: 3000
          });
          this.emailControl.reset();
          this.emailControl.markAsTouched();
          this.formValid = false;
          this.createUserBtnOption.active = false;
        }
      });
      if (this.formValid) {
        this.sendRequest();
      }
    } else {
      this.formToDirty();
    }
  }

  private sendRequest() {
    this.createUserBtnOption.active = true;
    const user: User = {
      name: this.nameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      password_confirmation: this.passwordControl.value,
      role_id: this.roleId
    };
    this.server.userCreate(user).subscribe(response => {
      console.log(response);
      switch (response.code) {
        case 200:
          this.rebuildDataSource(response.user);
          this.formToPristine();
          break;
        case 203:
          location.reload();
          this.snackbar.open('Your session has over, please re-login', 'Close', {
            duration: 3000
          });
          this.auth.logout();
          break;
      }
    });
  }

  public dialogDeleteUser(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent, { data: { user: id } });
    const data = this.dataSource.data;
    dialogRef.afterClosed().subscribe(response => {
      data.filter((el, index) => {
        if (el.id === response) {
          data.splice(index);
          this.snackbar.open('Successfully delete a User', 'Close', {
            duration: 3000
          });
        }
      });
      this.dataSource.data = data;
    });
  }

  private rebuildDataSource(user: User) {
    const newUser = { position: this.iterate++, id: user.id, name: user.name, email: user.email, role_id: user.role.id };
    const data = this.dataSource.data;
    data.push(newUser);
    this.dataSource.data = data;
    this.users = data.length;
    this.snackbar.open('Successfully create new User', 'Close', {
      duration: 3000
    });
  }

  private formIsValid(): boolean {
    if (this.nameControl.errors == null && this.passwordControl.errors == null && this.emailControl.errors == null && this.roleId !== 0) {
      this.formValid = true;
      return true;
    }
    return false;
  }

  private formToDirty() {
    this.nameControl.markAsTouched();
    this.emailControl.markAsTouched();
    this.passwordControl.markAsTouched();
  }

  private formToPristine() {
    this.current = null;
    this.nameControl.reset();
    this.emailControl.reset({ value: '', disabled: false });
    this.passwordControl.reset();
    this.roleId = 1;
    this.createUserBtnOption.active = false;
    this.createUserBtnOption.spinnerColor = 'accent';
    this.createUserBtnOption.buttonColor = 'primary';
    this.createUserBtnOption.text = 'Create User';
  }

}
