import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
vehicles:any =[];
constructor(private _vehicleService:VehiclesService){
 this.loadvehicles();
}

loadvehicles(){
   this._vehicleService.getVehicles().subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log(this.vehicles);
  },(err:any)=>{
    alert("Internal Server Error!")
  }
  )
}

   keywords:any='';
   search(){
    this._vehicleService.filteredvehicles(this.keywords).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data
    },(err:any)=>{
      alert("Internal Server Error!")
   })
  }

   column:any='';
   order:any='';
   sort(){
    this._vehicleService.sortedvehicles(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    })
   }

   limit:number=0;
   page:number=0;

   pagination(){
    this._vehicleService.paginatedvehicles(this.limit,this.page).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    })
   }

    delete(id:number){
      if(confirm("Are you sure to delete?")==true){
         this._vehicleService.deletevehicle(id).subscribe((data:any)=>{
     alert("record deleted successfully");
       this.loadvehicles();
    },(err:any)=>{
      alert("Internal Server Error!")
    })
    }else{
      alert("You have cancelled delete")
    }
   }
}
