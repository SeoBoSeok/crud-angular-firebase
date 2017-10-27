import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RoutingModule } from "./app.routes";
import { HomeComponent } from './componentes/home/home.component';
import { dataComponent } from './componentes/data/data.component';
import { InsertComponent } from './componentes/insert/insert.component';
import { FirebaseService } from "./componentes/app.firebase.service";
import { editComponent } from './componentes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    dataComponent,
    InsertComponent,
    editComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
