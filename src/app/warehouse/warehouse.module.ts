import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PartialsModule } from '../partials/partials.module';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialPurchasingComponent } from './material-purchasing/material-purchasing.component';

@NgModule({
  declarations: [MaterialPurchasingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatProgressButtonsModule
  ]
})
export class WarehouseModule { }
