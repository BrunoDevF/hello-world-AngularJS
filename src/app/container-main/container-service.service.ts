import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {

  constructor() { }

  getLanguages(): string[] {
    return ['Java', 'PHP', 'Python','JavaScript'];
  }
}
