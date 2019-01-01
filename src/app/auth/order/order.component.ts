import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MatTableDataSource } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public dataSource: MatTableDataSource<Product>;
  public tableHeader: string[];
  public total: number;
  public subTotal: number;
  public discount: number;
  public paymentType: FormControl;
  public productFormGroup: FormGroup;
  public customerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.total = 0;
    this.subTotal = 0;
    this.discount = 0;
    this.tableHeader = ['position', 'name', 'price', 'quantity'];
    const ELEMENT_DATA: Product[] = [
      { position: 1, id: 1, name: 'Lubricants', price: 45000, quantity: 100 },
      { position: 2, id: 2, name: 'Chain Cleaner', price: 25000, quantity: 300 },
      { position: 3, id: 3, name: 'Chain Lube', price: 30000, quantity: 150 },
      { position: 4, id: 4, name: 'Paint Remover', price: 50000, quantity: 300 },
      { position: 5, id: 5, name: 'Catalyst', price: 15000, quantity: 450 },
    ];
    this.dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
    this.sumTotal();
    this.productFormGroup = this.formBuilder.group({
    });
    this.customerFormGroup = this.formBuilder.group({
      customerName: ['Toko Berkah Abadi', Validators.required],
      customerPhone: ['Jln. Borobudur Raya no. 13 Kelapa Dua Kabupaten Tangerang', Validators.required],
      customerAddress: ['0823 1987 8833', Validators.required]
    });
  }

  public sumTotal() {
    this.dataSource.data.forEach((data) => {
      this.subTotal += data.price * data.quantity;
    });
    this.total = this.subTotal - this.discount;
  }

}
