import { Material } from 'src/app/response/material';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-show-card',
  templateUrl: './material-show-card.component.html',
  styleUrls: ['./material-show-card.component.scss']
})
export class MaterialShowCardComponent implements OnInit {

  @Input() material: Material;

  constructor() { }

  ngOnInit() {
  }

}
