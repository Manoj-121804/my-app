import { Component } from '@angular/core';
import { PininterestService } from '../pininterest.service';

@Component({
  selector: 'app-pininterest',
  templateUrl: './pininterest.component.html',
  styleUrls: ['./pininterest.component.css']
})
export class PininterestComponent {

   pininterest:any=[];
    constructor(private _pininterest:PininterestService){
  
        _pininterest.getImages().subscribe((data:any)=>{
          console.log(data);
        this.pininterest=data;
        console.log(this.pininterest);
      },(err:any)=>{
        alert("Internal Server Error!")
  
        })
      }
        download:any;
      downloadimg(){
        this.download=("")
      }
}
