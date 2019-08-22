import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Injeção de dependencia
  constructor(private http: HttpClient) { }
  //método
  public login(data:LoginModel){
    //post pede url e dados
    return this.http.post(`https://reqres.in/api/login`,data);
  }
}
