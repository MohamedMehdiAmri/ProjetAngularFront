import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../models/voiture';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private host = "http://localhost:8081/carService";
  constructor( private client:HttpClient) { }
  public getAllVoiture(): Observable <Voiture[]>{
   return this.client.get<Voiture[]>(this.host+"/car/all");
  }
  public getAllVoituresBC(idc:number):Observable<Voiture[]>{
    return this.client.get<Voiture[]>(this.host+"/car/"+idc);
  }
  public getVoitureById(id: number):Observable<Voiture>{
    return this.client.get<Voiture>(this.host+"/car/"+id);

  }
  public saveVoiture(voiture: any):Observable<any>{
    return this.client.post<any>(this.host+"/car",voiture);

  }
  public delete(id: number):Observable<any>{
    
    return this.client.delete<any>(this.host+"/car/"+id);
 
  }
  public update(id:number,voiture:any):Observable<any>{
    return this.client.put<any>(this.host+"/car/"+id,voiture);
  }

  public getByBrand(brand:string):Observable<any>{
    return this.client.get<any>(this.host+"/car/brand/"+brand)
  }

  public upload(formData: FormData): Observable<String>{
    return this.client.post<string>(`${this.host}/upload`, formData)
  }
}
