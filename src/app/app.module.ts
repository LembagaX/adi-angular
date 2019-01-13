import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PartialsModule } from './partials/partials.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    MatProgressButtonsModule.forRoot(),
    AuthModule,
    StorageServiceModule,
    PartialsModule,
    WarehouseModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
