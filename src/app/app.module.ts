import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BonbondexComponent } from './bonbondex/bonbondex.component';
import { HouseComponent } from './house/house.component';
import { FiltreComponent } from './filtre/filtre.component';
import { AddadresseComponent } from './addadresse/addadresse.component';

@NgModule({
  declarations: [
    AppComponent,
    BonbondexComponent,
    HouseComponent,
    FiltreComponent,
    AddadresseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularOpenlayersModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
