import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from '../app-routing.module';
import { PartialsModule } from '../partials/partials.module';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialPurchasingComponent } from './material-purchasing/material-purchasing.component';
import { MaterialDepreciationComponent } from './material-depreciation/material-depreciation.component';

@NgModule({
  declarations: [
    MaterialPurchasingComponent,
    MaterialDetailComponent,
    MaterialDepreciationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatProgressButtonsModule,
    ChartModule
  ]
})
export class WarehouseModule { }
