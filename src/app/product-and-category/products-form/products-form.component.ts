import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/response/product';
import { Category } from 'src/app/response/category';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { CategoriesDialogComponent } from '../categories-dialog/categories-dialog.component';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @Input() editable: Product;

  public loading: boolean;

  protected form: FormGroup;
  protected categories: Category[];

  constructor(
    private auth: AuthService,
    private category: CategoryService,
    private product: ProductService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loading = true;
    this.fetchCategories();
  }

  private fetchCategories() {
    this.category.index().subscribe(response => {
      this.categories = response;
      this.buildForm();
      this.loading = false;
    });
  }

  private buildForm() {
    if (this.editable) {
      this.form = new FormGroup({
        name: new FormControl(this.editable.name, [Validators.required, Validators.maxLength(60), Validators.minLength(6)]),
        code: new FormControl(
          { value: this.editable.code, disabled: true }, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        category_id: new FormControl(this.editable.category.id, [Validators.required]),
        price: new FormControl({ value: this.editable.price, disabled: !this.auth.isAdmin() }, [Validators.required]),
        stock: new FormControl({ value: 0, disabled: true }, [Validators.required])
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(6)]),
        code: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        category_id: new FormControl(null, [Validators.required]),
        price: new FormControl({ value: 0, disabled: !this.auth.isAdmin() }, [Validators.required]),
        stock: new FormControl({ value: 0, disabled: true }, [Validators.required])
      });
    }
  }

  public submit() {
    let dialogRef: MatDialogRef<LoadingPopupComponent>;
    if (this.editable) {
      dialogRef = this.dialog.open(LoadingPopupComponent, { data: 'Updating Product data' });
    } else {
      dialogRef = this.dialog.open(LoadingPopupComponent, { data: 'Creating Product data' });
    }
    this.product.index().subscribe(respose => {
      const duplicate = respose.find(product => product.code === this.form.controls['code'].value);
      if (duplicate && !this.editable) {
        this.form.controls['code'].setValue('');
        this.snackbar.open('Code already been taken', 'close', { duration: 3000 });
        dialogRef.close();
      } else {
        if (this.editable) {
          this.product.update(this.editable, this.form.value).subscribe(() => {
            dialogRef.close();
            this.snackbar.open('Product updated', 'Close', { duration: 2000 });
          });
        } else {
          this.product.create(this.form.value).subscribe(() => {
            dialogRef.close();
            this.snackbar.open('Product created', 'Close', { duration: 2000 });
          });
        }
      }
    });
  }

  public createCategory() {
    const dialogRef = this.dialog.open(CategoriesDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.fetchCategories();
    });
  }
}
