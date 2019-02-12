import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from '../app-routing.module';
import { PartialsModule } from '../partials/partials.module';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { OrdersProductsStepperComponent } from './orders-products-stepper/orders-products-stepper.component';
import { WarehouseModule } from '../warehouse/warehouse.module';
import { OrdersCustomerStepperComponent } from './orders-customer-stepper/orders-customer-stepper.component';
import { CustomersAddressSheetComponent } from './customers-address-sheet/customers-address-sheet.component';
import { OrdersPaymentStepperComponent } from './orders-payment-stepper/orders-payment-stepper.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersCreateComponent,
    OrdersTableComponent,
    OrdersProductsStepperComponent,
    OrdersCustomerStepperComponent,
    CustomersAddressSheetComponent,
    OrdersPaymentStepperComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    AppRoutingModule,
    PartialsModule,
    MaterialModule,
    MatProgressButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    WarehouseModule
  ],
  entryComponents: [
    CustomersAddressSheetComponent
  ]
})
export class AdminModule { }
