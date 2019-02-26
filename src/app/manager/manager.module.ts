import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MaterialModule } from '../material/material.module';
import { PartialsModule } from '../partials/partials.module';
import { AnnouncementsTableComponent } from './announcements-table/announcements-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsMaterialComponent } from './analytics-material/analytics-material.component';
import { WarehouseModule } from '../warehouse/warehouse.module';
import { AnalyticsDepreciationComponent } from './analytics-depreciation/analytics-depreciation.component';
import { AnnouncementDialogComponent } from './announcement-dialog/announcement-dialog.component';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    AnnouncementsTableComponent,
    AnalyticsMaterialComponent,
    AnalyticsDepreciationComponent,
    AnnouncementDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    WarehouseModule
  ], 
  entryComponents: [
    AnnouncementDialogComponent
  ]
})
export class ManagerModule { }
