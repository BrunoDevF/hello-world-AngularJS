import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerMainComponent } from './container-main.component';
import { ContentComponent } from './content/content.component';
import { ContainerServiceService } from './container-service.service'


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
  ],
  providers: [
    ContainerServiceService
  ]
})
export class ContainerMainModule { }
