import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PininterestService {

  constructor( private _httpClient:HttpClient) { }
   
  getImages(){
    return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100")
  }
  


}
