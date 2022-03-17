import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ContainerMainModule } from './container-main/container-main.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
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
