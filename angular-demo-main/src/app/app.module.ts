import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ExerciceBannerComponent } from './exercice/exercice-banner/exercice-banner.component';
import { DemoBannerComponent } from './demo/demo-banner/demo-banner.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercice/exercice1/exercice1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExerciceBannerComponent,
    DemoBannerComponent,
    Demo1Component,
    Exercice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
