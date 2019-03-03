import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { MaterialService } from 'src/app/material.service';
import { Product } from 'src/app/response/product';
import { Material } from 'src/app/response/material';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.scss']
})
export class DashboardManagerComponent implements OnInit {

  public products: Product[];
  public materials: Material[];

  constructor(
    private _product: ProductService,
    private _material: MaterialService
  ) {}

  ngOnInit() {
    this.products = [];
    this.materials = [];
    this._product.index().subscribe(response => {
      response.forEach(product => {
        if (product.stock <= 100) {
          this.products.push(product);
        }
      });
    });
    this._material.index().subscribe(response => {
      response.forEach(material => {
        if (material.stock <= 200) {
          this.materials.push(material);
        }
      });
    });
  }

}
