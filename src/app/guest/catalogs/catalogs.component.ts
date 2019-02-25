import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {

  public catalogs: Catalog[];

  constructor(
    private _catalog: CatalogService
  ) { }

  ngOnInit() {
    this._catalog.index(true).subscribe(response => this.catalogs =  response);
  }

}
