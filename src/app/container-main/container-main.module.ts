import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerMainComponent } from './container-main.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    ContainerMainComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerMainComponent
  ]
})
export class ContainerMainModule { }
