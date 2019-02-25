import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';
import { MatDialog } from '@angular/material';
import { AdvertisesDialogComponent } from '../advertises-dialog/advertises-dialog.component';
import { CatalogService } from 'src/app/catalog.service';
import { CatalogsFormDialogComponent } from '../catalogs-form-dialog/catalogs-form-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogs-card',
  templateUrl: './catalogs-card.component.html',
  styleUrls: ['./catalogs-card.component.scss']
})
export class CatalogsCardComponent implements OnInit {

  @Input() public catalog: Catalog;

  constructor(
    private _dialog: MatDialog,
    private _catalog: CatalogService,
    private _router: Router
  ) { }

  ngOnInit() {}

  public openDialog() {
    const dialog = this._dialog.open(AdvertisesDialogComponent,
      {
        width: '95%',
        data: {
          catalog: this.catalog,
          pickable: true
        }
      });
    dialog.afterClosed().subscribe(() => this.fetch());
  }

  private fetch() {
    this._catalog.show(this.catalog.slug).subscribe(response => this.catalog = response);
  }

  public edit() {
    const dialog = this._dialog.open(CatalogsFormDialogComponent,
      { width: '50%', data: this.catalog });
    dialog.afterClosed().subscribe(() => {
      this.fetch();
    });
  }

  public destroy() {
    const loading = this._dialog.open(LoadingPopupComponent, { data: 'Destroying Catalog' });
    this._catalog.destroy(this.catalog).subscribe(() => {
      loading.close();
      this._router.navigate(['/advertises']);
    });
  }
}
