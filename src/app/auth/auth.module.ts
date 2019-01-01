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

@NgModule({
  declarations: [DashboardComponent, UsersComponent, DialogDeleteUserComponent, OrderComponent],
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
    DialogDeleteUserComponent
  ]
})
export class AuthModule { }
