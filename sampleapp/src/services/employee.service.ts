import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../../AngularModels/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  url = '';

  // Inject HttpClient as a dependency
  constructor(private http: HttpClient) {
    // URL value to reach the node server
    this.url = 'http://localhost:5000/api';
   }

   // Service call to get total Employee List
   getEmployees(): Observable<EmployeeDetails[]> {
     const url = this.url + '/employees';
    return this.http.get<EmployeeDetails[]>(url);
  }

  // Service call to get a specific Employee using the 'Id'
  getEmployee(id: number): Observable<EmployeeDetails> {
    const url = this.url + '/employee/' + id;
    console.log(url);
    return this.http.get<EmployeeDetails>(url);
  }

  // Service call to Add a new Employee
  addEmployee(employee: EmployeeDetails): Observable<EmployeeDetails> {
    const url = this.url + '/employee/';
    return this.http.post<EmployeeDetails>(url, employee);
  }

  // Service call to Update an existing employee
  updateEmployee(employee: EmployeeDetails): Observable<EmployeeDetails> {
    const url = this.url + '/employee/' + employee.id;
    return this.http.put<EmployeeDetails>(url, employee);
  }

  // Service call to Delete the requested employee
  deleteEmployee(id: number): Observable<{}> {
    const url = this.url + '/employee/' + id;

    return this.http.delete(url);
  }
}
