import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from '../app-routing.module';
import { OrderComponent } from './order/order.component';
import { PartialsModule } from '../partials/partials.module';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsComponent } from '../Auth/materials/materials.component';
import { DiscountDialogComponent } from '../Auth/discount-dialog/discount-dialog.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { SelectProductDialogComponent } from '../Auth/select-product-dialog/select-product-dialog.component';
import { RemoveSelectedProductComponent } from '../Auth/remove-selected-product/remove-selected-product.component';
import { RequestedProductDialogComponent } from '../Auth/requested-product-dialog/requested-product-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    DialogDeleteUserComponent,
    OrderComponent,
    SelectProductDialogComponent,
    RequestedProductDialogComponent,
    RemoveSelectedProductComponent,
    DiscountDialogComponent,
    MaterialsComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    MatProgressButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    AppRoutingModule
  ],
  entryComponents: [
    DialogDeleteUserComponent,
    SelectProductDialogComponent,
    RequestedProductDialogComponent,
    RemoveSelectedProductComponent,
    DiscountDialogComponent
  ]
})
export class AuthModule { }
