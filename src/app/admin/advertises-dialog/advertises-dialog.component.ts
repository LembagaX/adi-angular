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
  public current: Advertise;

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

  public onCatalog(advertise: Advertise): boolean {
    if (this.catalog.advertises.find(el => el.id === advertise.id)) {
      return true;
    } else {
      return false;
    }
  }

  public attach(advertise: Advertise) {
    this.current = advertise;
    this._catalog.attach(this.catalog, advertise).subscribe(() => this.refetch());
  }

  public detach(advertise: Advertise) {
    this.current = advertise;
    this._catalog.detach(this.catalog, advertise).subscribe(() => this.refetch());
  }

  private refetch() {
    this.current = null;
    this._catalog.show(this.data.catalog.slug).subscribe(response => this.catalog = response);
  }

  public onProgress(advertise: Advertise): boolean {
    if (this.current === advertise) {
      return true;
    }
    return false;
  }
}
