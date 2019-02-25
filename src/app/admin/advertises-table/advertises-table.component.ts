import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertiseService } from 'src/app/advertise.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Advertise } from 'src/app/response/advertise';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-advertises-table',
  templateUrl: './advertises-table.component.html',
  styleUrls: ['./advertises-table.component.scss']
})
export class AdvertisesTableComponent implements OnInit {

  public advertise: Advertise;
  public advertises: MatTableDataSource<Advertise>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _advertise: AdvertiseService,
    private _dialog: MatDialog
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

  public destroy(advertise: Advertise) {
    const loading = this._dialog.open(LoadingPopupComponent, { data: 'Destroying, please wait' });
    this._advertise.destroy(advertise).subscribe(() => {
      this.afterFormHandler(true);
      loading.close();
    });
  }

  public edit(advertise: Advertise) {
    this.advertise = advertise;
  }
}
