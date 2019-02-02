import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Manufacture } from 'src/app/response/manufacture';
import { ManufactureService } from 'src/app/manufacture.service';

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
    private service: ManufactureService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.headers = ['id', 'code', 'user', 'attach'];
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

}
