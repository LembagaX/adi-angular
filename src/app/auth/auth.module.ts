import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PartialsModule
  ]
})
export class AuthModule { }
