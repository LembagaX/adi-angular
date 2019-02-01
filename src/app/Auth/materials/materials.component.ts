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
  protected growth: string;
  protected thead: string[];
  protected tbody: Material[];
  protected providers: number;
  protected showTable: boolean;

  constructor(
    public server: ServerService
  ) { }

  ngOnInit() {
    this.showTable = false;
    this.buildTable();
  }

  public buildTable() {
    this.thead = ['id', 'name', 'providers', 'stock', 'price', 'purchase', 'depreciation', 'destroy'];
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
      });
      this.fetchCards();
    });
  }

  public fetchCards() {
    this.server.provderIndex().subscribe((response) => {
      this.providers = response.length;
      this.server.purchasingGrowth().subscribe((purchasing) => {
        let percent = 0;
        if (purchasing.last_month_purchases === 0) {
          this.growth = purchasing.message;
        } else {
          this.growth = 'Compare with last month';
          percent = purchasing.growth_percentage;
        }
        this.cards = [
          { icon: 'view_comfy', title: 'Providers', body: 'Material Provider bought from', point: `${this.providers} providers`, type: '' },
          { icon: 'show_chart', title: 'Purchasing Growth', body: `${this.growth}`, point: `${percent} %`, type: 'primary' },
          { icon: 'multiline_chart', title: 'Materials Depreciation', body: 'Compare with last month', point: '5%', type: 'accent' },
        ];
        this.showTable = true;
      });
    });
  }
}
