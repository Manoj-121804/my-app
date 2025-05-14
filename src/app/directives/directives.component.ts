import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age:number=12;

  ages:number[]=[10,20,13,25,43,54,85,46]

  states:string[]=['telangana','andhra pradesh','karnataka','tamilnadu'];

  products:any[]=[
    {name:'pen',price:20,rating:2.4},
    {name:'book',price:200,rating:3.6},
    {name:'shirt',price:700,rating:4.6},
    {name:'shoes',price:2000,rating:3.2},
    {name:'laptop',price:50000,rating:2.8},
    {name:'bike',price:2000000,rating:3.9}

  ]

today:any = new Date();

}
