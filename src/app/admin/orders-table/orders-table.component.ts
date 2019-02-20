import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Order } from 'src/app/response/order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  @Input() showCancel: boolean;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public headers: string[];
  public sources: MatTableDataSource<Order>;

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {
    this.fetchOrders();
  }

  private fetchOrders() {
    this._order.index().subscribe(response => this.buildTable(response));
  }

  private buildTable(data: Order[]) {
    console.log(data);
    this.headers = ['id', 'number', 'customer', 'termin', 'created_at', 'delivery_order', 'sales_invoice'];
    this.sources = new MatTableDataSource<Order>(data);
    this.sources.sort = this.sort;
    this.sources.paginator = this.paginator;
  }

  public applyFilter(filterValue: string) {
    this.sources.filter = filterValue.trim().toLowerCase();
  }

  public terminClass(number: number): string {
    if (number < 30) {
      return 'text-danger';
    } else if (number > 30) {
      return 'text-primary';
    } else if (number > 60) {
      return 'text-secondary';
    }
  }

}
