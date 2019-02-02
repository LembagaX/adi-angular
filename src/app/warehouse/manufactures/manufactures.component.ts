import { Component, OnInit } from '@angular/core';
import { ManufactureService } from 'src/app/manufacture.service';

@Component({
  selector: 'app-manufactures',
  templateUrl: './manufactures.component.html',
  styleUrls: ['./manufactures.component.scss']
})
export class ManufacturesComponent implements OnInit {

  constructor(
    private service: ManufactureService
  ) { }

  ngOnInit() {
  }

}
