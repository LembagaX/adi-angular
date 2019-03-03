import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/material.service';
import { Material } from 'src/app/response/material';

@Component({
  selector: 'app-materials-expantion-panel',
  templateUrl: './materials-expantion-panel.component.html',
  styleUrls: ['./materials-expantion-panel.component.scss']
})
export class MaterialsExpantionPanelComponent implements OnInit {

  public materials: Material[];

  constructor(
    private _material: MaterialService
  ) {}

  ngOnInit() {
    this.materials = [];
    this._material.index().subscribe(response => {
      response.forEach(material => {
        if (material.stock <= 200) {
          this.materials.push(material);
        }
      });
    });
  }

}
