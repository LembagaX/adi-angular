import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  public cards: any[];
  protected thead: string[];
  protected tbody: any[];

  constructor() { }

  ngOnInit() {
    this.cards = [
      { icon: 'view_comfy', title: 'Providers', body: 'All materials Provider', point: '120', type: '' },
      { icon: 'trending_up', title: 'Purchasing Growth', body: 'Increase From last month', point: '45%', type: 'primary' },
      { icon: 'trending_down', title: 'Materials depreciation', body: 'decrease From last month', point: '5%', type: 'accent' },
    ];
    this.thead = ['position', 'name', 'providers', 'stock'];
    this.tbody = [
      { position: 1, name: 'Hydrogen', stock: 100, providers: 2 },
      { position: 2, name: 'Helium', stock: 100, providers: 2 },
      { position: 3, name: 'Lithium', stock: 100, providers: 2 },
      { position: 4, name: 'Beryllium', stock: 430, providers: 2 },
      { position: 5, name: 'Boron', stock: 430, providers: 2 },
      { position: 6, name: 'Carbon', stock: 100, providers: 2 },
      { position: 7, name: 'Nitrogen', stock: 100, providers: 2 },
      { position: 8, name: 'Oxygen', stock: 100, providers: 2 },
      { position: 9, name: 'Fluorine', stock: 100, providers: 2 },
      { position: 10, name: 'Neon', stock: 100, providers: 2 },
      { position: 11, name: 'Sodium', stock: 100, providers: 2 },
      { position: 12, name: 'Magnesium', stock: 100, providers: 2 },
      { position: 13, name: 'Aluminum', stock: 100, providers: 2 },
      { position: 14, name: 'Silicon', stock: 100, providers: 2 },
      { position: 15, name: 'Phosphorus', stock: 100, providers: 2 },
      { position: 16, name: 'Sulfur', stock: 100, providers: 2 },
      { position: 17, name: 'Chlorine', stock: 100, providers: 2 },
      { position: 18, name: 'Argon', stock: 100, providers: 2 },
      { position: 19, name: 'Potassium', stock: 100, providers: 2 },
      { position: 20, name: 'Calcium', stock: 100, providers: 2 }
    ];
  }

}
