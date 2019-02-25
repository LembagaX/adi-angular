import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';
import { MatDialog } from '@angular/material';
import { AdvertisesDialogComponent } from '../advertises-dialog/advertises-dialog.component';

@Component({
  selector: 'app-catalogs-card',
  templateUrl: './catalogs-card.component.html',
  styleUrls: ['./catalogs-card.component.scss']
})
export class CatalogsCardComponent implements OnInit {

  @Input() public catalog: Catalog;

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public openDialog() {
    this._dialog.open(AdvertisesDialogComponent,
      {
        width: '95%',
        data: {
          catalog: this.catalog,
          pickable: true
        }
      });
  }

}
