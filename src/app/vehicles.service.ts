import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpClient:HttpClient) { }

  //  baseurl:string='/assets/data.json'
     baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseurl);
  }

   filteredvehicles(term:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"?filter="+term);
   }

    sortedvehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order);
   }

    paginatedvehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"?limit="+limit+"&page="+page);
   }

   
    deletevehicle(id:number):Observable<any>{
    return this._httpClient.delete(this.baseurl+"/"+id);
   }

    createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseurl,data)

   }

    getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"/"+id);

   }

    updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseurl+"/"+id,data);

   }

   

}
