import { NgModule } from '@angular/core';
import { GravatarModule } from 'ngx-gravatar';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { DrawerComponent } from '../drawer/drawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardIconComponent } from './card-icon/card-icon.component';
import { SubmitPopupComponent } from './submit-popup/submit-popup.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { LoadingPopupComponent } from './loading-popup/loading-popup.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { CategoriesChartComponent } from './categories-chart/categories-chart.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent,
    DrawerComponent,
    LoadingPopupComponent,
    SubmitPopupComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    CategoriesChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GravatarModule,
    AppRoutingModule,
    ChartModule
  ],
  exports: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent,
    DrawerComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    CategoriesChartComponent
  ],
  entryComponents: [
    LoadingPopupComponent,
    SubmitPopupComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent
  ]
})
export class PartialsModule { }
