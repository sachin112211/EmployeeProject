import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EmployeelistService } from '../service/employeelist.service';
import { employee } from 'src/employee';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
public employeelist : employee[] | undefined;
  constructor(private employeeservice :EmployeelistService,private router:Router){}
  ngOnInit(): void {
   this.allEmployees(); 


  }
  
  imagebaseurl = environment.baseUrl;
  
  
  

icon=faTrash
ikon= faEdit


delete(id:number){
  this.employeeservice.delete(id).subscribe((obj)=>{

setTimeout(()=>{
    this.allEmployees();
  },2000)
})
}

allEmployees(){
  this.employeeservice.allEmployees().subscribe(data=>{
     this.employeelist= data;

     console.warn(this.employeelist)

  })
}



}
