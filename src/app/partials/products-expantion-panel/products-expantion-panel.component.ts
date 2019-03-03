import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-products-expantion-panel',
  templateUrl: './products-expantion-panel.component.html',
  styleUrls: ['./products-expantion-panel.component.scss']
})
export class ProductsExpantionPanelComponent implements OnInit {

  public products: Product[];
  public unprice: Product[];
  public unattach: Product[];

  constructor(
    private _product: ProductService
  ) { }

  ngOnInit() {
    this.unprice = [];
    this.unattach = [];
    this._product.index().subscribe(response => {
      this.products = response;
      response.forEach(product => {
        if (product.price === 0) {
          this.unprice.push(product);
        }
        if (product.assemblies.length === 0) {
          this.unattach.push(product);
        }
      });
    });
  }

}
