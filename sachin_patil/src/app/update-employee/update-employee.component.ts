import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from '../service/employeelist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/employee';
import { environment } from 'src/environment';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  message:string | undefined;
 
 constructor(private employeelist:EmployeelistService,private route:ActivatedRoute,private router:Router){}
 
 public employee:employee | any;
 id:number=0;
 Id:any = " ";
 Image:string='';
  imagebaseurl= environment.baseUrl;
  file:File | undefined;
  ngOnInit() {
    let employeeid = this.route.snapshot.paramMap.get('id');

    this.Id = employeeid;

   employeeid && this.employeelist.getEmployeebyid(employeeid).subscribe((data)=>{
        this.employee = data;
          this.Image=this.employee.image;
          this.id = data.id;
        console.warn(data);

        localStorage.setItem('image', JSON.stringify(this.Image));

   })

  }  



  fileselected(event:any){
   this.file = event.target.files[0];
   let reader = new FileReader();

    

  }


  up(data:employee){
    console.log(data);
   if(this.employee){
    data.id = this.employee.id;
   }
   console.warn(data);
   const localStorageImage = localStorage.getItem('image');
   data.image = localStorageImage ? JSON.parse(localStorageImage) : '';

  let formdata = new FormData()
   //formdata.set('imageFile',this.file);
   formdata.set('name',data.name);
   formdata.set('department',data.department);
   formdata.set('image',data.image)
   formdata.set('id',this.Id);
   //data.imageFile=this.file;
   if (this.file) {
    data.imageFile=this.file;
    console.warn(data);

    formdata.set('imageFile', this.file);
  }


  console.warn(data);
  
   
  

this.employeelist.updateEmployee(formdata,this.Id).subscribe((result)=>{

   console.warn(result);
    setTimeout(()=>{
    
        this.message = "employee updated successfully";
       this.router.navigate(['/employeelist']);
      

    },4000)
   
   })
   }
  }
  



 
 








