import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SelectProductDialogComponent } from 'src/app/Auth/select-product-dialog/select-product-dialog.component';
import { RemoveSelectedProductComponent } from 'src/app/Auth/remove-selected-product/remove-selected-product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public tableHeader: string[];
  public total: number;
  public iterate: number;
  public subTotal: number;
  public discount: number;
  public paymentType: FormControl;
  public productFormGroup: FormGroup;
  public customerFormGroup: FormGroup;
  public products: MatTableDataSource<Product>;
  public selectedProducts: MatTableDataSource<Product>;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.iterate = 1;
    this.total = 0;
    this.subTotal = 0;
    this.discount = 0;
    this.tableHeader = ['position', 'name', 'price', 'quantity', 'options'];
    const products: Product[] = [
      { position: this.iterate++, id: 1, name: 'Lubricants', price: 45000, quantity: 0, stock: 100 },
      { position: this.iterate++, id: 2, name: 'Chain Cleaner', price: 25000, quantity: 0, stock: 300 },
      { position: this.iterate++, id: 3, name: 'Chain Lube', price: 30000, quantity: 0, stock: 150 },
      { position: this.iterate++, id: 4, name: 'Paint Remover', price: 50000, quantity: 0, stock: 300 },
      { position: this.iterate++, id: 5, name: 'Catalyst', price: 15000, quantity: 0, stock: 450 }
    ];
    const selectedProducts: Product[] = [];
    this.products = new MatTableDataSource<Product>(products);
    this.selectedProducts = new MatTableDataSource<Product>(selectedProducts);
    this.productFormGroup = this.formBuilder.group({
    });
    this.customerFormGroup = this.formBuilder.group({
      customerName: ['Toko Berkah Abadi', Validators.required],
      customerPhone: ['Jln. Borobudur Raya no. 13 Kelapa Dua Kabupaten Tangerang', Validators.required],
      customerAddress: ['0823 1987 8833', Validators.required]
    });
  }

  public sumTotal() {
    this.selectedProducts.data.forEach((data) => {
      this.subTotal += data.price * data.quantity;
    });
    this.total = this.subTotal - this.discount;
  }

  public openProductDialog() {
    const dialog = this.dialog.open(SelectProductDialogComponent, { width: '800px',
      data: {
        products: this.products,
        selectedProducts: this.selectedProducts
      }}
    );
    dialog.afterClosed().subscribe(result => {
      const selected = this.selectedProducts.data;
      this.selectedProducts.data = selected;
      this.sumTotal();
    });
  }

  public showRemoveDialog(id: number) {
    const product = this.selectedProducts.data.find((item) => item.id === id);
    const products = this.products.data;
    const selected = this.selectedProducts.data;
    const dialog = this.dialog.open(RemoveSelectedProductComponent,
      { data: product }
    );

    dialog.afterClosed().subscribe(result => {
      if (product.quantity === result) {
        this.selectedProducts.data.map((current, index) => {
          if (current.id === product.id) {
            selected.splice(index, 1);
            products.find((item => item.id === current.id)).stock += current.quantity;
          }
        });
      } else {
        product.quantity -= result;
        products.find((item => item.id === product.id)).stock += product.quantity;
      }
      this.selectedProducts.data = selected;
      this.products.data = products;
    });
  }
}
