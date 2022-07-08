import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseURL: string = "http://localhost:8000/";
  constructor(private http:HttpClient) { }
  listCarBrand(){
    return this.http.get(this.baseURL + 'brands');
  }
  viewCarBrand(id:string){
    return this.http.get(this.baseURL+'brands/'+id);
  }
  addCarBrand(carBrandObj:any){
    return this.http.post(this.baseURL + 'brand',carBrandObj);
  }
  editCarBrand(id:string,carBrandObj:any){
    return this.http.put(this.baseURL + 'brand/' + id,carBrandObj);
  }
  deleteCarBrand(id:string){
    return this.http.delete(this.baseURL + 'brand/' + id)
  }
}
