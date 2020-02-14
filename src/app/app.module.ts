import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './AuthModule/login/login.component';
import { MatSliderModule  } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './AuthModule/homepage/homepage.component';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },

  { path: '', component: HomepageComponent }]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule, ReactiveFormsModule, MatInputModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
