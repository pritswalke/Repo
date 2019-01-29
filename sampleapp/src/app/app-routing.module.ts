import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from '../app/employees/employees.component';
import { EmployeeViewComponent } from '../app/employee-view/employee-view.component';

const routes: Routes = [
  {
    path : '',
    component: EmployeesComponent
  },
  {
    path : 'employee/:id',
    component: EmployeeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
