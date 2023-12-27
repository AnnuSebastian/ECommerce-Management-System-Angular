import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // baseApiUrl : 'https://localhost:7296/api/'
  apiUrl = environment.baseApiUrl + 'Employees';

  constructor(private client : HttpClient) { } //created an object client for the service class of type HttpClient

  getList() : Observable<Employee[]>{ // created a method to get the list of employees from the api
    return this.client.get<Employee[]>(this.apiUrl);
  }

  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl + '/' + id); //this format is given in the delete method of Api
  }

  getById(id:number):Observable<Employee>{
    return this.client.get<Employee>(this.apiUrl + '/' + id); //this format is given in the get element by id method of Api
  }

  add(emp:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,emp)
  }

  update(e:Employee):Observable<void>{
   return this.client.put<void>(this.apiUrl + '/' + e.id,e);
  }
}
