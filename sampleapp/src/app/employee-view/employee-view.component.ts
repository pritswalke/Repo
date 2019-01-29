import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../../../AngularModels/EmployeeDetails';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employeeId: number;
  employee: EmployeeDetails = {
    id: 0,
    name: '',
    dept: '',
    salary: undefined,
  };
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
     this.employeeService.getEmployee(id).subscribe(emp => this.employee = emp);
    // this.employeeService.deleteEmployee(id).subscribe(emp => console.log('Deleted'));
     console.log(this.employee);
  }

}
