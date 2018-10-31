import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BonbondexComponent } from './bonbondex/bonbondex.component';
import { HouseComponent } from './house/house.component';
import { FiltreComponent } from './filtre/filtre.component';
import { BonbondexBagComponent } from './bonbondex-bag/bonbondex-bag.component';


const appRoutes: Routes = [
  { path: 'house', component: HouseComponent },
  { path: 'bonbondex', component: BonbondexComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BonbondexComponent,
    HouseComponent,
    FiltreComponent,
    BonbondexBagComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularOpenlayersModule,
    NgxPaginationModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
