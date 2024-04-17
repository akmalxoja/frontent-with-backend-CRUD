import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7266/api/Students/"
  constructor(private http: HttpClient) { }

    getAll(): Observable<User[]>{
      return this.http.get<User[]>(this.baseUrl + 'GettAllStudentsFromDB')
    }

    create(data: User): Observable<User> {
      return this.http.post<User>(this.baseUrl + 'CreateUser', data)
    }

}
