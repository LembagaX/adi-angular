import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartialsModule } from '../partials/partials.module';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, DialogDeleteUserComponent],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    MatProgressButtonsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogDeleteUserComponent
  ]
})
export class AuthModule { }
