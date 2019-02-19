import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  CardsFreeModule
} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsFreeModule,
    AppRoutingModule
  ]
})
export class GuestModule { }
