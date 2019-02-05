import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/response/category';
import { ProductService } from 'src/app/product.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Router } from '@angular/router';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @Input() editable: Product;

  protected form: FormGroup;
  protected loading: boolean;
  protected categories: Category[];

  constructor(
    private auth: AuthService,
    private category: CategoryService,
    private product: ProductService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.editable);
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
        category: new FormControl(this.editable.category.id, [Validators.required]),
        price: new FormControl({ value: this.editable.price, disabled: !this.auth.isAdmin() }, [Validators.required]),
        stock: new FormControl({ value: 0, disabled: true }, [Validators.required])
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(6)]),
        code: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        category: new FormControl(null, [Validators.required]),
        price: new FormControl({ value: 0, disabled: !this.auth.isAdmin() }, [Validators.required]),
        stock: new FormControl({ value: 0, disabled: true }, [Validators.required])
      });
    }
  }

  public submit() {
    if (this.editable) {
      this.dialog.open(LoadingPopupComponent, { data: 'Updating Product data' });
    } else {
      this.dialog.open(LoadingPopupComponent, { data: 'Creating Product data' });
    }
    this.product.index().subscribe(respose => {
      const duplicate = respose.find(product => product.code === this.form.controls['code'].value);
      if (duplicate && !this.editable) {
        this.form.controls['code'].setValue('');
        this.snackbar.open('Code already been taken', 'close', { duration: 3000 });
        this.dialog.closeAll();
      } else {
        if (this.editable) {
          this.product.update(this.editable, this.form.value).subscribe(() => {
            this.dialog.closeAll();
            this.snackbar.open('Product updated', 'Close', { duration: 2000 });
          });
        } else {
          this.product.create(this.form.value).subscribe(() => {
            this.dialog.closeAll();
            this.router.navigate(['/products']);
            this.snackbar.open('Product created', 'Close', { duration: 2000 });
          });
        }
      }
    });
  }
}
