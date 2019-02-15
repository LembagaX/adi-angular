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
import { CustomersCreateDialogComponent } from './customers-create-dialog/customers-create-dialog.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { AddressesCreateDialogComponent } from './addresses-create-dialog/addresses-create-dialog.component';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';
import { OrdersConfirmationStepperComponent } from './orders-confirmation-stepper/orders-confirmation-stepper.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersCreateComponent,
    OrdersTableComponent,
    OrdersProductsStepperComponent,
    OrdersCustomerStepperComponent,
    CustomersAddressSheetComponent,
    OrdersPaymentStepperComponent,
    CustomersCreateDialogComponent,
    CustomersFormComponent,
    AddressesCreateDialogComponent,
    AddressesFormComponent,
    OrdersConfirmationStepperComponent
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
    CustomersAddressSheetComponent,
    CustomersCreateDialogComponent,
    AddressesCreateDialogComponent
  ]
})
export class AdminModule { }
