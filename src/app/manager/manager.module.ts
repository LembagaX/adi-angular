import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MaterialModule } from '../material/material.module';
import { PartialsModule } from '../partials/partials.module';
import { AnnouncementsTableComponent } from './announcements-table/announcements-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnnouncementsComponent, AnnouncementsTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
