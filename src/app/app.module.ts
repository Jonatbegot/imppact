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
import { AddadresseComponent } from './addadresse/addadresse.component';
import { CarteComponent } from './carte/carte.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'house', component: HouseComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'bonbondex', component: BonbondexComponent },
  { path: '', component: CarteComponent },
  { path: '404', component: NotFoundComponent  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [
    AppComponent,
    BonbondexComponent,
    HouseComponent,
    FiltreComponent,
    BonbondexBagComponent,
    AddadresseComponent,
    CarteComponent,
    NotFoundComponent
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
