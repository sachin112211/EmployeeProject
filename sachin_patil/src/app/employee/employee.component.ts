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
  image:string | any='';


  isValidFile(file: File): boolean {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more if needed
  return file && allowedTypes.includes(file.type);
}


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
      this.message ="employee created successfully";

    console.warn(employee);
    setTimeout(()=>{
      this.message ="";
        this.router.navigate(['/employeelist'])
  
   },2000);
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
