import { Component, OnInit, Input } from '@angular/core';
import { Material } from 'src/app/response/material';

@Component({
  selector: 'app-material-bought-from',
  templateUrl: './material-bought-from.component.html',
  styleUrls: ['./material-bought-from.component.scss']
})
export class MaterialBoughtFromComponent implements OnInit {

  @Input() material: Material;

  constructor() { }

  ngOnInit() {
  }

}
