import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { CardIconComponent } from './card-icon/card-icon.component';
import { MaterialTableComponent } from './material-table/material-table.component';

@NgModule({
  declarations: [ToolbarComponent, CardIconComponent, MaterialTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent
  ]
})
export class PartialsModule { }
