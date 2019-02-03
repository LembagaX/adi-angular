import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Product } from 'src/app/response/product';
import { ProductService } from 'src/app/product.service';
import { Manufacture } from 'src/app/response/manufacture';
import { ManifestCreateComponent } from '../manifest-create/manifest-create.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @Input() attachable: boolean;
  @Input() manufacture: Manufacture;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public headers: string[];
  public manufactures: MatTableDataSource<Product>;

  protected loading: boolean;

  constructor(
    private product: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true;
    this.headers = ['id', 'code', 'name', 'serial_number', 'price', 'stock', 'category', 'attach'];
    this.buildTable();
  }

  private buildTable() {
    this.product.index().subscribe(response => {
      this.manufactures = new MatTableDataSource<Product>(response);
      this.manufactures.paginator = this.paginator;
      this.manufactures.sort = this.sort;
      this.loading = false;
    });
  }

  private rebuildTable() {
    this.loading = true;
    this.product.index().subscribe(response => {
      this.manufactures.data = response;
    });
    this.loading = false;
  }

  public applyFilter(filterValue: string) {
    this.manufactures.filter = filterValue.trim().toLowerCase();
  }

  public attahToManufacture(product: Product) {
    const dialogRef = this.dialog.open(ManifestCreateComponent,
      { width: '300px', data: { product: product, manufacture: this.manufacture }}
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rebuildTable();
      }
    });
  }
}
