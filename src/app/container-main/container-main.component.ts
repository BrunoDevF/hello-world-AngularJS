import { Component, OnInit } from '@angular/core';
import { ContainerServiceService } from './container-service.service'

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.scss']
})
export class ContainerMainComponent implements OnInit {

  message: string;
  languages: string[] = [];

  constructor(private containerServiceService: ContainerServiceService) { 
    this.message = 'Hello Bruno, welcome to Angular JS'

    this.languages = containerServiceService.getLanguages()
  }


  ngOnInit(): void {
  }

}
