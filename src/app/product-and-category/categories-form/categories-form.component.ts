import { Category } from 'src/app/response/category';
import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category: Category;

  public form: FormGroup;
  
  protected currentDialog: MatDialogRef<LoadingPopupComponent>;

  constructor(
    private dialog: MatDialog,
    private serive: CategoryService,
    public dialogRef: MatDialogRef<CategoriesFormComponent>,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    if (this.category) {
      this.form = new FormGroup({
        name: new FormControl(this.category.name, [Validators.required, Validators.minLength(3), Validators.maxLength(60)])
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)])
      });
    }
  }

  public submit() {
    if (this.category) {
      this.update();
    } else {
      this.create();
    }
  }

  private update() {
    this.dialog.open(LoadingPopupComponent, { data: 'Updating Category' });
    this.serive.update(this.form.value, this.category).subscribe(() => {
      this.dialog.closeAll();
      this.snackbar.open('Category Updated', 'close', { duration: 2000 });

    });
  }

  private create() {
    this.currentDialog =  this.dialog.open(LoadingPopupComponent, { data: 'Creating Category' });
    this.serive.create(this.form.value).subscribe(() => {
      this.currentDialog.close();
      this.dialogRef.close();
      this.snackbar.open('Category Created', 'close', { duration: 2000 });
    });
  }
}
