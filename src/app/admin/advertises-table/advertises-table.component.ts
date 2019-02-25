import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/advertise.service';
import { MatTableDataSource } from '@angular/material';
import { Advertise } from 'src/app/response/advertise';

@Component({
  selector: 'app-advertises-table',
  templateUrl: './advertises-table.component.html',
  styleUrls: ['./advertises-table.component.scss']
})
export class AdvertisesTableComponent implements OnInit {

  public advertises: MatTableDataSource<Advertise>;

  constructor(
    private _advertise: AdvertiseService
  ) {}

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
    this._advertise.index().subscribe(response => {
      console.log(response);
      this.advertises = new MatTableDataSource(response);
    });
  }

}
