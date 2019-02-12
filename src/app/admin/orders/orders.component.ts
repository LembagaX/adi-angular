import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public showCancel: boolean;

  constructor() { }

  ngOnInit() {
    this.showCancel = false;
  }

  public showCanceled(event: MatSlideToggleChange) {
    this.showCancel = event.checked;
  }
}
