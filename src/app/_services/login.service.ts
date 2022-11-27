import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrlLogin } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  
  public loginByUserID(loginData: any){
    // console.log("--->", loginData);
    return this.httpClient.post(`${baseUrlLogin}/login/userID`, loginData);
  }

  public loginByEmail(loginData: any){
    // console.log("--->", loginData);
    return this.httpClient.post(`${baseUrlLogin}/login/email`, loginData);
  }

  public setId(id: any){
    localStorage.setItem("id", id);
  }

  public getId(): any{
    return localStorage.getItem("id");
  }
}
