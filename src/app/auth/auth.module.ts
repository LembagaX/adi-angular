import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartialsModule } from '../partials/partials.module';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { OrderComponent } from './order/order.component';
import { SelectProductDialogComponent } from '../Auth/select-product-dialog/select-product-dialog.component';
import { RequestedProductDialogComponent } from '../Auth/requested-product-dialog/requested-product-dialog.component';
import { RemoveSelectedProductComponent } from '../Auth/remove-selected-product/remove-selected-product.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    DialogDeleteUserComponent,
    OrderComponent,
    SelectProductDialogComponent,
    RequestedProductDialogComponent,
    RemoveSelectedProductComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    MatProgressButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  entryComponents: [
    DialogDeleteUserComponent,
    SelectProductDialogComponent,
    RequestedProductDialogComponent,
    RemoveSelectedProductComponent
  ]
})
export class AuthModule { }
