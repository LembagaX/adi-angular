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
import { LogsDialogComponent } from './logs-dialog/logs-dialog.component';
import { CurrentUserExpantionPanelComponent } from './current-user-expantion-panel/current-user-expantion-panel.component';
import { CategoriesExpantionPanelComponent } from './categories-expantion-panel/categories-expantion-panel.component';
import { UsersExpantionPanelComponent } from './users-expantion-panel/users-expantion-panel.component';
import { UsersChartComponent } from './users-chart/users-chart.component';
import { HistoryExpantionPanelComponent } from './history-expantion-panel/history-expantion-panel.component';
import { CatalogsExpantionPanelComponent } from './catalogs-expantion-panel/catalogs-expantion-panel.component';
import { ProductsExpantionPanelComponent } from './products-expantion-panel/products-expantion-panel.component';
import { OrdersExpantionPanelComponent } from './orders-expantion-panel/orders-expantion-panel.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardWarehouseComponent } from './dashboard-warehouse/dashboard-warehouse.component';
import { ManufacturesExpantionPanelComponent } from './manufactures-expantion-panel/manufactures-expantion-panel.component';
import { MaterialsExpantionPanelComponent } from './materials-expantion-panel/materials-expantion-panel.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

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
    CategoriesChartComponent,
    LogsDialogComponent,
    CurrentUserExpantionPanelComponent,
    CategoriesExpantionPanelComponent,
    UsersExpantionPanelComponent,
    UsersChartComponent,
    HistoryExpantionPanelComponent,
    CatalogsExpantionPanelComponent,
    ProductsExpantionPanelComponent,
    OrdersExpantionPanelComponent,
    DashboardAdminComponent,
    DashboardWarehouseComponent,
    ManufacturesExpantionPanelComponent,
    MaterialsExpantionPanelComponent,
    DashboardManagerComponent,
    AnnouncementsComponent
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
    CategoriesChartComponent,
    LogsDialogComponent,
    CurrentUserExpantionPanelComponent,
    CategoriesExpantionPanelComponent,
    UsersExpantionPanelComponent,
    UsersChartComponent,
    HistoryExpantionPanelComponent,
    CatalogsExpantionPanelComponent,
    ProductsExpantionPanelComponent,
    OrdersExpantionPanelComponent,
    DashboardAdminComponent,
    DashboardWarehouseComponent,
    MaterialsExpantionPanelComponent,
    DashboardManagerComponent,
    AnnouncementsComponent
  ],
  entryComponents: [
    LoadingPopupComponent,
    SubmitPopupComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    LogsDialogComponent
  ]
})
export class PartialsModule { }
