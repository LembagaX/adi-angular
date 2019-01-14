import { Material } from '../../models/material';
import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  public cards: any[];
  protected thead: string[];
  protected tbody: Material[];
  protected showTable: boolean;

  constructor(
    public server: ServerService
  ) { }

  ngOnInit() {
    this.showTable = false;
    this.cards = [
      { icon: 'view_comfy', title: 'Providers', body: 'All materials Provider', point: '120', type: '' },
      { icon: 'trending_up', title: 'Purchasing Growth', body: 'Increase from last month', point: '45%', type: 'primary' },
      { icon: 'trending_down', title: 'Materials depreciation', body: 'Decrease from last month', point: '5%', type: 'accent' },
    ];
    this.buildTable();
    this.server.materialIndex().subscribe((response) => console.log(response));
  }

  public buildTable() {
    this.thead = ['id', 'name', 'providers', 'stock', 'price', 'action'];
    this.tbody = [];
    this.server.materialIndex().subscribe((response) => {
      response.forEach(material => {
        this.tbody.push({
          id: material.id,
          name: material.name,
          slug: material.slug,
          stock: material.stock,
          price: material.price,
          providers: material.providers
        });
        this.showTable = true;
      });
    });
  }
}
