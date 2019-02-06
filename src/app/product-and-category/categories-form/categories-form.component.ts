import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CategoryService } from 'src/app/category.service';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  protected form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private serive: CategoryService
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)])
    });
  }

  public submit() {
    this.dialog.open(LoadingPopupComponent, { data: 'Creating Category' });
    this.serive.create(this.form.value).subscribe(() => {
      this.dialog.closeAll();
    });
  }
}
