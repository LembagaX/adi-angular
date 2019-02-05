import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/response/category';
import { ProductService } from 'src/app/product.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

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
    this.loading = true;
    this.category.index().subscribe(response => {
      this.categories = response;
      this.buildForm();
      this.loading = false;
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(6)]),
      code: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      category: new FormControl(null, [Validators.required]),
      price: new FormControl({ value: 0, disabled: !this.auth.isAdmin() }, [Validators.required]),
      stock: new FormControl({ value: 0, disabled: true }, [Validators.required])
    });
  }

  public submit() {
    this.dialog.open(LoadingPopupComponent, { data: 'Creating Product data' });
    this.product.index().subscribe(respose => {
      const duplicate = respose.find(product => product.code === this.form.controls['code'].value);
      if (duplicate) {
        this.form.controls['code'].setValue('');
        this.snackbar.open('Code already been taken', 'close', { duration: 3000 });
        this.dialog.closeAll();
      } else {
        this.product.create(this.form.value).subscribe(response => {
          this.dialog.closeAll();
          this.router.navigate(['/products']);
          this.snackbar.open('Product created', 'Close', { duration: 2000 });
        });
      }
    });
  }

}
