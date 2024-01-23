import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from 'src/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
   private base_url='https://localhost:44320/api';
  //private base_url = 'https://localhost:7222/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpclient:HttpClient) { }


  create(data: any){
    console.warn(data);
    return this.httpclient.post(this.base_url+ '/Students',data);

  }
 

}
