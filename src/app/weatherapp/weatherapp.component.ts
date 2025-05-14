import { Component } from '@angular/core';
import { WeatherappService } from '../weatherapp.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent {
   weather:any=[];
  constructor(private _weatherapp:WeatherappService){

      _weatherapp.getWeather().subscribe((data:any)=>{
        console.log(data);
      this.weather=data;
      console.log(this.weather);
    },(err:any)=>{
      alert("Internal Server Error!")


      })


  }

}
