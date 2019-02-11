import { NgModule } from '@angular/core';
import { GravatarModule } from 'ngx-gravatar';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { DrawerComponent } from '../drawer/drawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardIconComponent } from './card-icon/card-icon.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { LoadingPopupComponent } from './loading-popup/loading-popup.component';
import { SubmitPopupComponent } from './submit-popup/submit-popup.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    CardIconComponent,
    MaterialTableComponent,
    DrawerComponent,
    LoadingPopupComponent,
    SubmitPopupComponent,
    ConfirmationDialogComponent
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
    DrawerComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    LoadingPopupComponent,
    SubmitPopupComponent,
    ConfirmationDialogComponent
  ]
})
export class PartialsModule { }
