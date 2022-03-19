import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerMainModule } from './container-main/container-main.module';
import { InputComponent } from './components/input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
