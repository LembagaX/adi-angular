import { NgModule } from '@angular/core';
import { GravatarModule } from 'ngx-gravatar';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DrawerComponent } from '../drawer/drawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardIconComponent } from './card-icon/card-icon.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GravatarModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent,
    DrawerComponent
  ]
})
export class PartialsModule { }
