import { Request } from 'src/model/request.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class RequestService {
    private apiUrl = 'http://localhost:8080/requests';
  
    constructor(private http: HttpClient) { }
  
    // Get a list of all requests
    listRequests(): Observable<Request[]> {
      return this.http.get<Request[]>(this.apiUrl);
    }
  
    // Get a single request by its ID
    getRequest(id: number): Observable<Request> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Request>(url);
    }
  
    // Create a new request
    saveRequest(request: Request): Observable<Request> {
      return this.http.post<Request>(this.apiUrl, request);
    }
  
    // Update an existing request
    updateRequest(request: Request): Observable<Request> {
      const url = `${this.apiUrl}/${request.id}`;
      return this.http.put<Request>(url, request);
    }
  
    // Delete a request by its ID
    deleteRequest(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }
  
    // Submit a request for review
    submitRequestForReview(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}/review`;
      return this.http.post(url, {});
    }
  
    // Approve a request
    approveRequest(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}/approve`;
      return this.http.post(url, {});
    }
  
    // Reject a request
    rejectRequest(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}/reject`;
      return this.http.post(url, {});
    }
  
    // Get all requests for review by a specific user ID
    getRequestsByUserId(userId: number): Observable<Request[]> {
      const url = `${this.apiUrl}/review/${userId}`;
      return this.http.get<Request[]>(url);
    }
  }