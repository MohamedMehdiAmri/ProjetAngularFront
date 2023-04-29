import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marque } from '../models/marque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {//http://localhost:8081/marqueService

  private host = "http://localhost:8081/marqueService";
  constructor( private client:HttpClient) { }
  public getAllMarques(): Observable <Marque[]>{
   return this.client.get<Marque[]>(this.host+"/marque/all");
  }
  public getAllMarquesBC(idc:number):Observable<Marque[]>{
    return this.client.get<Marque[]>(this.host+"/marque/"+idc);
  }
  public saveMarque(marque: any):Observable<any>{
    return this.client.post<any>(this.host+"/marque",marque);

  } 
  public deleteMarque(id: number):Observable<any>{
    
    return this.client.delete<any>(this.host+"/marque/"+id);
}
}