import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/Models/product';
import { RequestedProductDialogComponent } from '../requested-product-dialog/requested-product-dialog.component';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-select-product-dialog',
  templateUrl: './select-product-dialog.component.html',
  styleUrls: ['./select-product-dialog.component.scss']
})
export class SelectProductDialogComponent implements OnInit {

  protected header: string[];
  protected currentProduct: Product;
  protected requestedQuantity: number;
  protected products: MatTableDataSource<Product>;
  protected selectedProducts: MatTableDataSource<Product>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.header = ['position', 'name', 'price', 'stock', 'options'];
    this.products = new MatTableDataSource<Product>(this.data.products.data);
    this.selectedProducts = new MatTableDataSource<Product>(this.data.selectedProducts.data);
    this.products.sort = this.sort;
    this.products.paginator = this.paginator;
  }

  public applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(position: number) {
    this.currentProduct = this.products.data[position - 1];
    const dialogRef = this.dialog.open(RequestedProductDialogComponent, { data: { product: this.products.data[position - 1] } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requestedQuantity = result;
        this.snackbar.open(`Successfully add ${this.requestedQuantity} ${this.currentProduct.name} to Order List`, 'Close', {
          duration: 2000
        });
        this.subByRequestedQuantity(position);
      }
    });
  }

  private subByRequestedQuantity(position: number) {
    const lastData = this.products.data;
    const lastSelected = this.selectedProducts.data;
    lastData[position - 1].stock -= this.requestedQuantity;
    lastData[position - 1].quantity += this.requestedQuantity;
    if (lastSelected.find(product => product.id === lastData[position - 1].id) == null) {
      lastSelected.push(lastData[position - 1]);
    }
    this.products.data = lastData;
    this.selectedProducts.data = lastSelected;
  }
}
