import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./componentes/home/home.component";
import { dataComponent } from "./componentes/data/data.component";
import { InsertComponent } from "./componentes/insert/insert.component";
import { editComponent } from "./componentes/edit/edit.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: dataComponent },
  { path: 'register/:id', component: InsertComponent },
  { path: 'edit/:key', component: editComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
