import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Catalog } from 'src/app/request/catalog';
import { CatalogService } from 'src/app/catalog.service';
import { AdvertiseService } from 'src/app/advertise.service';
import { Advertise } from 'src/app/response/advertise';

@Component({
  selector: 'app-advertises-dialog',
  templateUrl: './advertises-dialog.component.html',
  styleUrls: ['./advertises-dialog.component.scss']
})
export class AdvertisesDialogComponent implements OnInit {

  public catalog: Catalog;
  public advertises: Advertise[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pickable: boolean, catalog: Catalog },
    private _catalog: CatalogService,
    private _advertises: AdvertiseService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  public fetch() {
    this._catalog.show(this.data.catalog.slug).subscribe(response => this.catalog = response);
    this._advertises.index().subscribe(response => this.advertises = response);
  }

}
