import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerMainComponent } from './container-main.component';
import { ContentComponent } from './content/content.component';
import { InputComponent } from '../components/input/input.component';
import { ContainerServiceService } from './container-service.service'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContainerMainComponent,
    ContentComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContainerMainComponent
  ],
  providers: [
    ContainerServiceService
  ]
})
export class ContainerMainModule { }
