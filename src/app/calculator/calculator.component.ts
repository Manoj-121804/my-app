import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number_1:number=0;
  number_2:number=0;
  result:number=0;

  sum(){
    this.result=this.number_1+this.number_2;
  }

  sub(){
    this.result=this.number_1-this.number_2;
  }

  mul(){
    this.result=this.number_1*this.number_2;
  }
  div(){
    this.result=this.number_1/this.number_2;
  }
  }

