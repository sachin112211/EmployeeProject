import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

   private base_url='https://localhost:44320/api';

  //private base_url = 'https://localhost:7222/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpclient:HttpClient) { }

 allEmployees():Observable<employee[]>{
  return this.httpclient.get<employee[]>(this.base_url + '/Students');
 }

 delete(id:number){
  return this.httpclient.delete(this.base_url + '/Students/'+id);
 }

 getEmployeebyid(id:string){
   return this.httpclient.get<employee>(this.base_url + '/Students/'+id );
 }
 
 updateEmployee(formdata:FormData,id:number){
   return this.httpclient.put<employee>(this.base_url +'/Students/'+id,formdata);
 }



}
