import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Order } from 'src/app/response/order';

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

  constructor() { }

  ngOnInit() {
    this.buildTable();
  }

  private buildTable() {
    this.headers = ['id', 'number', 'customer', 'termin', 'canceled', 'cancel', 'show'];
    const data: Order[] = [];
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
