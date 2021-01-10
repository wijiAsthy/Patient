import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layout :
import { LayoutumumComponent } from './_layout/layoutumum/layoutumum.component';
import { LayoutdataComponent} from './_layout/layoutdata/layoutdata.component'
// Halaman :

import { FooterInfoComponent } from './footer-info/footer-info.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
// Layout Umum 
{ 
  path: '', 
  component: LayoutumumComponent,
  children: [
    { path: '', component: HomeComponent, pathMatch: 'full'},
   
  ]  
},

// Layout Data
{
  path: '', 
    component: LayoutdataComponent,
    children: [
     
      { path: 'contactus', component: ContactusComponent },
    ]
},

  
// Yang lain, refer ke home :
{ path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
