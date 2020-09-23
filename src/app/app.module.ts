import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetInfoComponent } from './get-info/get-info.component';
import { IsCarAvailableComponent } from './is-car-available/is-car-available.component';
import { IsPersonRegisteredComponent } from './is-person-registered/is-person-registered.component';
import { httpInterceptProviders } from '..//http-interceptor/index';

@NgModule({
  declarations: [
    AppComponent,
    GetInfoComponent,
    IsCarAvailableComponent,
    IsPersonRegisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
