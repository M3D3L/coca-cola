import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BaseCarouselComponent } from './components/base-carousel/base-carousel.component';
import { CarouselTwoComponent } from './components/carousel-two/carousel-two.component';
import { CarouselThreeComponent } from './components/carousel-three/carousel-three.component';
import { IconBannerComponent } from './components/icon-banner/icon-banner.component';
import { CarouselFourComponent } from './components/carousel-four/carousel-four.component';
import { TextWallComponent } from './components/text-wall/text-wall.component';
import { BaseFooterComponent } from './components/base-footer/base-footer.component';
import { GlobalComponent } from './components/global/global.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselCountryComponent } from './components/carousel-country/carousel-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchBarComponent,
    BaseCarouselComponent,
    CarouselTwoComponent,
    CarouselThreeComponent,
    IconBannerComponent,
    CarouselFourComponent,
    TextWallComponent,
    BaseFooterComponent,
    GlobalComponent,
    HomeComponent,
    CarouselCountryComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


