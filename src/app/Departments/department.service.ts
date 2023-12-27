import { HttpClient } from '@angular/common/http';//client object creation automatically imports this
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Department } from './department';

@Injectable({ //DepartmentService class is an injectable class which is injectable to various other components and classes
  providedIn: 'root' //within the root module
})
export class DepartmentService {

  // baseApiUrl : 'https://localhost:7296/api/'
  apiUrl = environment.baseApiUrl + 'departments';//or can be defined as apiUrl = `${environment.baseApiUrl}categories`;

  constructor(private client : HttpClient) { } //client object of type HttpCliet is created and given by API

  getList(): Observable<Department[]>{
    return this.client.get<Department[]>(this.apiUrl);
  }

  add(dept:Department) : Observable<Department>{
    return this.client.post<Department>(this.apiUrl,dept);
  }

  getById(id:number) : Observable<Department>{
    return this.client.get<Department>(this.apiUrl + '/' + id);
  }

  update(dept:Department): Observable<void>{
    return this.client.put<void>(this.apiUrl + '/' + dept.id,dept);
  }


}
