import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Manufacture } from 'src/app/response/manufacture';
import { ProductsCreateDialogComponent } from 'src/app/product-and-category/products-create-dialog/products-create-dialog.component';

@Component({
  selector: 'app-attach-product',
  templateUrl: './attach-product.component.html',
  styleUrls: ['./attach-product.component.scss']
})
export class AttachProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { manufacture: Manufacture },
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public createProductDialog() {
    const dialogRef = this.dialog.open(ProductsCreateDialogComponent, { width: '800px'});
    dialogRef.afterClosed().subscribe(() => {
      this.snackbar.open('Please re-fetch the table', 'close', { duration: 2000 });
    });
  }
}
