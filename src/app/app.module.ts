import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first-component/first-component';
import { ComponentCliComponent } from './component-cli/component-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ComponentCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
