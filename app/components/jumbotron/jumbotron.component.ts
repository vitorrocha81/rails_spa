import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor() {
    this.jbtHeading="Bem Vindo";
    this.jbText="Texto padrão simples, 123 ....";
    this.jbtBtnText="Leia mais...";
    this.jbtBtnUrl="/about";
  }
}