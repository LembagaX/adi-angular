import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MaterialModule } from '../material/material.module';
import { PartialsModule } from '../partials/partials.module';
import { AnnouncementsTableComponent } from './announcements-table/announcements-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsMaterialComponent } from './analytics-material/analytics-material.component';
import { WarehouseModule } from '../warehouse/warehouse.module';

@NgModule({
  declarations: [AnnouncementsComponent, AnnouncementsTableComponent, AnalyticsMaterialComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    WarehouseModule
  ]
})
export class ManagerModule { }
