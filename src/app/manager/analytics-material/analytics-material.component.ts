import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/response/material';
import { MaterialService } from 'src/app/material.service';

@Component({
  selector: 'app-analytics-material',
  templateUrl: './analytics-material.component.html',
  styleUrls: ['./analytics-material.component.scss']
})
export class AnalyticsMaterialComponent implements OnInit {

  public current: Material;
  public materials: Material[];

  constructor(
    private _material: MaterialService
  ) { }

  ngOnInit() {
    this._material.index().subscribe(response => this.materials = response);
  }

}
