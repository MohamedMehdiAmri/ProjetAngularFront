import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string='AuthToken';
  private host ="http://127.0.0.1:8000/api/";

  constructor( private client:HttpClient) { }
  public setAcess(t:string){
    localStorage.setItem(this.token,t)
  }
   public getAcess(){
    return localStorage.getItem(this.token);
   }

   public login(f:any){ 
   return this.client.post<any>(this.host+"login",f);
   }

   public logout():Observable<any>{
    let t= new FormData();
    let to:string=this.getAcess()??'';
    t.append("token",to);
    localStorage.removeItem(this.token);
    return this.client.post<any>(this.host+"logout",t);
  }
}
