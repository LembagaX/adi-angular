import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/response/product';
import { AuthService } from 'src/app/auth.service';
import { MatDialog } from '@angular/material';
import { ProductsEditComponent } from '../products-edit/products-edit.component';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.scss']
})
export class ProductsInfoComponent implements OnInit {

  @Input() code: string;

  public product: Product;
  public loading: boolean;

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.fetchProduct();
  }

  private fetchProduct() {
    this.service.show(this.code).subscribe(response => {
      this.product = response;
      this.loading = false;
    });
  }

  public editProduct() {
    const dialogRef = this.dialog.open(ProductsEditComponent, { data: { product: this.product }, width: '1000px' });
    dialogRef.afterClosed().subscribe(() => {
      this.refetch();
    });
  }


  private refetch() {
    this.loading = true;
    this.fetchProduct();
  }
}
