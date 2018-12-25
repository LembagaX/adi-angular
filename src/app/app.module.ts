import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { AuthModule } from './auth/auth.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { PartialsModule } from './partials/partials.module';

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
    PartialsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
