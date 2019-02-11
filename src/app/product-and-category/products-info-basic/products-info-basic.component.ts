import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-products-info-basic',
  templateUrl: './products-info-basic.component.html',
  styleUrls: ['./products-info-basic.component.scss']
})
export class ProductsInfoBasicComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
