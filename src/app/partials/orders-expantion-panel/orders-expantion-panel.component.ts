import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/response/order';

@Component({
  selector: 'app-orders-expantion-panel',
  templateUrl: './orders-expantion-panel.component.html',
  styleUrls: ['./orders-expantion-panel.component.scss']
})
export class OrdersExpantionPanelComponent implements OnInit {

  public today: string;
  public orders: Order[];

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {
    this.orders = [];
    this.today = formatDate(Date.now().toString(), 'yyyy-MM-dd', 'en');
    this._order.index().subscribe(response => {
      response.forEach(order => {
        if (order.created_at.substr(0, 10) === this.today) {
          this.orders.push(order);
        }
      });
    });
  }

}
