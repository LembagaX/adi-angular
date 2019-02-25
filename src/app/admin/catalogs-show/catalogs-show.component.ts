import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Catalog } from 'src/app/request/catalog';

@Component({
  selector: 'app-catalogs-show',
  templateUrl: './catalogs-show.component.html',
  styleUrls: ['./catalogs-show.component.scss']
})
export class CatalogsShowComponent implements OnInit {

  public catalog: Catalog;
  public loading: boolean;

  constructor(
    private _catalog: CatalogService,
    private _router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.fetch();
  }

  private fetch() {
    this._catalog.show(this._router.snapshot.params['slug']).subscribe(response => {
      this.catalog = response;
      this.loading = false;
    });
  }

}
