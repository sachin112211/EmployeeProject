import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'employeelist',component:EmployeelistComponent},
  {path: 'update-employee/:id',component:UpdateEmployeeComponent},
  {path: 'employeelist/:id',component:EmployeeidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {






 }
