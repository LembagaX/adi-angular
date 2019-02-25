import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  CardsFreeModule,
  CarouselModule,
  InputsModule
} from 'angular-bootstrap-md';
import { RootComponent } from './root/root.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GravatarModule } from 'ngx-gravatar';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogsCardComponent } from './catalogs-card/catalogs-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RootComponent,
    CarouselComponent,
    BlogComponent,
    IntroComponent,
    FooterComponent,
    ContactComponent,
    CatalogsComponent,
    CatalogsCardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsFreeModule,
    AppRoutingModule,
    CarouselModule,
    InputsModule,
    GravatarModule
  ]
})
export class GuestModule { }
