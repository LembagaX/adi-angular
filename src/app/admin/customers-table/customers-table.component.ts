import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/response/customer';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public loading: boolean;
  public customer: Customer;
  public customers: MatTableDataSource<Customer>;

  constructor(
    private _customer: CustomerService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loading = true;
    this.buildTable();
  }


  private buildTable() {
    this._customer.index().subscribe(response => {
      this.customers = new MatTableDataSource(response);
      this.customers.sort = this.sort;
      this.customers.paginator = this.paginator;
      this.loading = false;
    });
  }

  public selectCustomer(customer: Customer) {
    this.customer = customer;
  }

  public applyFilter(filterValue: string) {
    this.customers.filter = filterValue.trim().toLowerCase();
  }
}
