import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/response/material';
import { MaterialService } from 'src/app/material.service';

@Component({
  selector: 'app-analytics-depreciation',
  templateUrl: './analytics-depreciation.component.html',
  styleUrls: ['./analytics-depreciation.component.scss']
})
export class AnalyticsDepreciationComponent implements OnInit {

  public materials: Material[];
  public material: Material;

  constructor(
    private _material: MaterialService
  ) { }

  ngOnInit() {
    this._material.index().subscribe(response => this.materials = response);
  }

}
