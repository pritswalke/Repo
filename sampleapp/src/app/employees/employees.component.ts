import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from '../../../AngularModels/EmployeeDetails';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  @ViewChild('employeeForm') form: any;
  employee: EmployeeDetails = {
    id: 0,
    name: '',
    dept: '',
    salary: undefined,
  };
  employees: EmployeeDetails[];
  currentEmployee: EmployeeDetails;
  employeeId: number;
  constructor(private employeeService: EmployeeService) { }

  /**
   * Display the employee list in the employee grid on home page load
   */
  ngOnInit() {
    this.getEmployees();
  }

  /**
   * Function to get the list of employees
   */
  getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log(this.employees);
    });
  }

  /***
   * Function to ADD/UPDATE an employee.
   * ADD: Adds a new employee into the database.
   * UPDATE: Clicking on the edit button for any employee (in the employee table)
   * loads that employee in the 'Employee Details' Panel. We can change any details
   *  and submit them to successfully update that employee
   */
  addEmployee(e: NgForm) {
    /**If the employee details received by this function do not have a valid employee id,
     * then a new employee is created
     * If a valid employee id exists, then the existing employee record for that employee is updated */

     // Update operation
    if ( e.value.Id !== 0 ) {
      // create an employee object to store the updated employee details
      const updatedEmployee: EmployeeDetails = {
        id: e.value.Id,
        name: e.value.Name,
        dept: e.value.Department,
        salary: e.value.Salary
      };

      // Update employee service call
       this.employeeService.updateEmployee(updatedEmployee).subscribe( em => {
        e.resetForm();
        this.getEmployees();
      });
    } else {
      /***
       * Add a new employee
       */
       const newEmployee: EmployeeDetails = {
        id: 0,
        name: e.value.Name,
        dept: e.value.Department,
        salary: e.value.Salary
      };

      // Add new employee service call
      this.employeeService.addEmployee(newEmployee).subscribe(emp => {
        this.employee = emp;
        // clear the form contents after submitting
        e.resetForm();

        // Reload the Employees list
        this.getEmployees();
      });
    }
  }

  // Function call on clicking the edit button for any employee in the employee table
  /***
   * Gets the requested employee detail from the employee table
   * and loads it in the 'Employee Details' panel
   */
  editEmployee(n: number) {

    // Get requested Employee record from the employee table
    this.employeeService.getEmployee(n).subscribe(emp => {
      this.employee = emp;
    });
  }

  /***
   * Deletes an employee with the given id
   */
  deleteEmployee(id: number) {

    // Service call to delete an employee
     this.employeeService.deleteEmployee(id).subscribe(() => {
       // Reload the Employees list
       this.getEmployees();
     });
  }
}
