import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Manufacture } from 'src/app/response/manufacture';
import { ManufactureService } from 'src/app/manufacture.service';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-manufactures-table',
  templateUrl: './manufactures-table.component.html',
  styleUrls: ['./manufactures-table.component.scss']
})
export class ManufacturesTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public headers: string[];
  public manufactures: MatTableDataSource<Manufacture>;

  protected loading: boolean;

  constructor(
    private service: ManufactureService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true;
    this.headers = ['id', 'code', 'user', 'products_created', 'analytics', 'attach', 'delete'];
    this.buildTable();
  }

  private buildTable() {
    this.service.index().subscribe(response => {
      this.manufactures = new MatTableDataSource<Manufacture>(response);
      this.manufactures.paginator = this.paginator;
      this.manufactures.sort = this.sort;
      this.loading = false;
    });
  }

  public applyFilter(filterValue: string) {
    this.manufactures.filter = filterValue.trim().toLowerCase();
  }

  public destroyManufacture(manufacture: Manufacture) {
    this.dialog.open(LoadingPopupComponent, { data: 'Destroying Manufacture' });
    this.service.destroy(manufacture).subscribe(() => {
      this.service.index().subscribe(response => {
        this.manufactures.data = response;
      });
      this.dialog.closeAll();
    });
  }

}
