import { Component, OnInit, Output } from '@angular/core';
import { Manufacture } from 'src/app/response/manufacture';

@Component({
  selector: 'app-manufactures-create',
  templateUrl: './manufactures-create.component.html',
  styleUrls: ['./manufactures-create.component.scss']
})
export class ManufacturesCreateComponent implements OnInit {

  protected manufacture: Manufacture;

  constructor() { }

  ngOnInit() {
  }

  public manufactureListener(manufacture: Manufacture) {
    this.manufacture = manufacture;
    console.log(this.manufacture);
  }
}
