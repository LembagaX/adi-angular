import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Catalog } from 'src/app/request/catalog';

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
    private _catalog: CatalogService
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

}
