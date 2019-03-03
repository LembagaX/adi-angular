import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-manufactures-expantion-panel',
  templateUrl: './manufactures-expantion-panel.component.html',
  styleUrls: ['./manufactures-expantion-panel.component.scss']
})
export class ManufacturesExpantionPanelComponent implements OnInit {

  public products: Product[];

  constructor(
    private _product: ProductService
  ) { }

  ngOnInit() {
    this.products = [];
    this._product.index().subscribe(response => {
      response.forEach(product => {
        if (product.stock <= 100) {
          this.products.push(product);
        }
      });
    });
  }

}
