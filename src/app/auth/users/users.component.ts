import { Component, OnInit } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  public hidePassword: boolean;
  public createUserBtnOption: MatProgressButtonOptions;
  public emailControl: FormControl;
  public nameControl: FormControl;
  public passwordControl: FormControl;

  constructor() {
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
  }

  ngOnInit() {
  }

}
