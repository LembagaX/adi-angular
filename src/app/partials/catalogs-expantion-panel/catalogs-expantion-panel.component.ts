import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-catalogs-expantion-panel',
  templateUrl: './catalogs-expantion-panel.component.html',
  styleUrls: ['./catalogs-expantion-panel.component.scss']
})
export class CatalogsExpantionPanelComponent implements OnInit {

  public catalogs: Catalog[];

  constructor(
    private _catalog: CatalogService
  ) { }

  ngOnInit() {
    this._catalog.index().subscribe(response => this.catalogs = response);
  }

}
