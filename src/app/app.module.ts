import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutumumComponent } from './_layout/layoutumum/layoutumum.component';
import { LayoutdataComponent } from './_layout/layoutdata/layoutdata.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';    
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    
    
    LayoutumumComponent,
    LayoutdataComponent,
   
    ContactusComponent,
   
    HeaderNavComponent,
    FooterInfoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
