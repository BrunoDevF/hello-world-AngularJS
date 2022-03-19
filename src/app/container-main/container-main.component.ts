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
  inputValue: string = '';
  nome: string = 'bruno';

  constructor(private containerServiceService: ContainerServiceService) { 
    this.message = 'Hello Bruno, welcome to Angular JS'

    this.languages = containerServiceService.getLanguages()
  }

  onChange(input: KeyboardEvent){
    this.inputValue = (<HTMLInputElement>input.target).value;
  }


  ngOnInit(): void {
  }

}
