import { User } from "src/model/user.class";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' // specifies that the service should be provided at the root level (i.e., application-wide)
  })
  export class UserService {
    private apiUrl = 'http://localhost:8080/users'; // the base API URL for user-related requests
  
    constructor(private http: HttpClient) { } // injects the HttpClient service for making HTTP requests
  
    // retrieve a list of users from the API
    list(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }
  
    // retrieve a single user with the given ID from the API
    get(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
    }
  
    // save a new user to the API
    save(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl, user);
    }
  
    // update an existing user with the given ID in the API
    update(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user.id}`;
      return this.http.put<User>(url, user);
    }
  
    // delete an existing user with the given ID from the API
    delete(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }
  
    // log a user in to the application via the API
    login(credentials: { username: string, password: string }): Observable<any> {
      const url = `${this.apiUrl}/login`;
      return this.http.post(url, credentials);
    }
  }