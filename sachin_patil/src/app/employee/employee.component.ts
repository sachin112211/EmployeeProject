import { Component } from '@angular/core';
import { employee } from 'src/employee';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  
  imageFile: any;


 constructor(public employeeService: EmployeeService,private router: Router) { }
 public  message:string ='';


  createEmployee(data:employee){
 console.log(data);

    let formdata = new FormData();
    formdata.set('name',data.name);
    formdata.set('department',data.department);
    formdata.set('imageFile',this.imageFile);

    console.log(formdata);
  if(data){
  
  }
  this.employeeService.create(formdata).subscribe(employee=>{

    console.warn(employee);
    setTimeout(()=>{
      this.message ="employee created successfully";
        this.router.navigate(['/employeelist'])
  
   },5000);
  })



}


onFileSelected(event:any){
  console.warn(event.target.files[0]);
   if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =(event:any)=>{
      this.image=reader.result;
    }
   }
  
  this.imageFile = event.target.files[0];
  console.warn(this.imageFile)
}

}
