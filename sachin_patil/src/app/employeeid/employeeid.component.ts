import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeelistService } from '../service/employeelist.service';
import { employee } from 'src/employee';
import { environment } from 'src/environment';


@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.scss']
})
export class EmployeeidComponent implements OnInit {
imagebaseurl =environment.baseUrl;
message:string|any;

constructor(private route:ActivatedRoute,private employeelist:EmployeelistService){}
public employee:employee | undefined;  

ngOnInit(): void {

  let employeeid:any = this.route.snapshot.paramMap.get('id');
   
  this.employeelist.getEmployeebyid(employeeid).subscribe((data)=>{
     console.warn(data);
    this.employee = data;
    console.warn(this.employee);

  })
  console.warn(typeof(employeeid));



  }

  delete(id:number){

    this.employeelist.delete(id).subscribe((data)=>{
      
      setTimeout(()=>{
         if(data){     
        this.message="deleted successfully";
         }
      },4000)
    })

  }





}
