import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import 'rxjs/add/operator/map';
//import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private username:string;
  private clientid = 'Iv1.442512248ec90b57';
  private clientsecret = 'qgAdbgWbSE23d9tlpWf3KH75/jZmP+X6NTXNcmwu7w4=';
  public users_data:any

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Nancy';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?cient_id=" + this.clientid + " client_secret=" + this.clientsecret);
    
  }

  getProfileRepos(){

    return this.http.get("https://api.github.com/users/" + this.username + "/repos?cient_id=" + this.clientid + " client_secret=" + this.clientsecret);
    
  }

  updateProfile(username:string){
    this.username = username
  }
}
