import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';

@Component({
  selector: 'app-catalogs-card',
  templateUrl: './catalogs-card.component.html',
  styleUrls: ['./catalogs-card.component.scss']
})
export class CatalogsCardComponent implements OnInit {

  @Input() public catalog: Catalog;

  constructor() { }

  ngOnInit() {}

}
