import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.scss']
})
export class ContainerMainComponent implements OnInit {

  message: string;

  constructor() { 
    this.message = 'Hello Bruno, welcome to Angular JS'
  }

  ngOnInit(): void {
  }

}
