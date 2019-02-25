import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertiseService } from 'src/app/advertise.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Advertise } from 'src/app/response/advertise';

@Component({
  selector: 'app-advertises-table',
  templateUrl: './advertises-table.component.html',
  styleUrls: ['./advertises-table.component.scss']
})
export class AdvertisesTableComponent implements OnInit {

  public advertises: MatTableDataSource<Advertise>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _advertise: AdvertiseService
  ) {}

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
    this._advertise.index().subscribe(response => {
      this.advertises = new MatTableDataSource(response);
      this.advertises.paginator = this.paginator;
      this.advertises.sort = this.sort;
    });
  }

  public afterFormHandler(bool: boolean) {
    if (bool) {
      this.fetch();
    }
  }
}
