import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { AddressInputComponent } from './components/address-input/address-input.component';
@NgModule({
  declarations: [AppComponent, RegisterComponent, HomeComponent, UpdateProfileComponent, AddressInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
