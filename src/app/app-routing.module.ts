import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from "./mainpage/mainpage.component";
import {ContactComponent} from "./contact/contact.component";
import {AttractionsComponent} from "./attractions/attractions.component";
import {GuestsComponent} from "./guests/guests.component";

const routes: Routes = [

  {path: '', component: MainpageComponent},
  {path: 'atrakcje', component: AttractionsComponent},
  {path: 'goscie', component: GuestsComponent},
  {path:'kontakt', component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
