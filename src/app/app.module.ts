import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AjouterVoitureComponent } from './components/ajouter-voiture/ajouter-voiture.component';
import { ListesVoituresComponent } from './components/listes-voitures/listes-voitures.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateVoitureComponent } from './components/update-voiture/update-voiture.component';
import { MarqueVoitureComponent } from './components/marque-voiture/marque-voiture.component';
import { AuthComponent } from './auth/auth.component';
import { AjouterMarqueComponent } from './components/ajouter-marque/ajouter-marque.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterVoitureComponent,
    ListesVoituresComponent,
    HomeComponent,
    DetailComponent,
    UpdateVoitureComponent,
    MarqueVoitureComponent,
    AuthComponent,
    AjouterMarqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
