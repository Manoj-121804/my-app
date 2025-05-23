import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
     @Input() a:string='';

  // @Output() firstEvent:EventEmitter<string>=new EventEmitter();

  // send(){
  //   this.firstEvent.emit('Hi Manoj!');
  // }
  varaiable:any='50';
   @Output() secondEvent:EventEmitter<any>=new EventEmitter();

    send(){
    this.secondEvent.emit(this.varaiable);
   }

   @Input() role:string='';

   name:string='';

   @Output() nameEvent:EventEmitter<string>=new EventEmitter();

   submit(){
    this.nameEvent.emit(this.name)
   }

 


}
