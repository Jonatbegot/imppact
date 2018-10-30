import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppComponent } from './app.component';
import { BonbondexComponent } from './bonbondex/bonbondex.component';
import { FiltreComponent } from './filtre/filtre.component';

@NgModule({
  declarations: [
    AppComponent,
    BonbondexComponent,
    FiltreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
