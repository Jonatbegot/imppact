import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BonbondexComponent } from './bonbondex/bonbondex.component';

@NgModule({
  declarations: [
    AppComponent,
    BonbondexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularOpenlayersModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
