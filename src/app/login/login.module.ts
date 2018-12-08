import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { GravatarModule } from 'ngx-gravatar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GravatarModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressButtonsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
