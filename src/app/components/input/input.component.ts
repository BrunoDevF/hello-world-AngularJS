import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  
  // Nome do parametro que o componente irá receber
  @Input('nome') nomeCurso: string = '';

  ngOnInit(): void {
  }

}
