import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUsers(searchTerm: string): Observable<User> {
    return this.http.get<User>(this.apiUrl+'/users/'+searchTerm);
  }
}
