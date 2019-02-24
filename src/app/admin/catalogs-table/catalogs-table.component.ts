import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Catalog } from 'src/app/request/catalog';
import { CatalogsFormDialogComponent } from '../catalogs-form-dialog/catalogs-form-dialog.component';

@Component({
  selector: 'app-catalogs-table',
  templateUrl: './catalogs-table.component.html',
  styleUrls: ['./catalogs-table.component.scss']
})
export class CatalogsTableComponent implements OnInit {

  public loading: boolean;
  public catalogs: MatTableDataSource<Catalog>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _catalog: CatalogService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.defaultConf();
    this.fetch();
  }

  private defaultConf() {
    this.loading = true;
  }

  private fetch() {
    this._catalog.index().subscribe(response => {
      this.catalogs = new MatTableDataSource(response);
      this.catalogs.paginator = this.paginator;
      this.catalogs.sort = this.sort;
      this.loading = false;
    });
  }

  public showDialog() {
    const dialog = this._dialog.open(CatalogsFormDialogComponent,
      {
        width: '50%'
      });
    dialog.afterClosed().subscribe(() => {
      this.refectch();
    });
  }

  private refectch() {
    this.loading = true;
    this.fetch();
  }
}
