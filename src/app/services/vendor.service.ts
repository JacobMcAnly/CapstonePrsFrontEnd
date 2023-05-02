import { Vendor } from "src/model/vendor.class";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class VendorService {
    private apiUrl = 'http://localhost:8080/vendors';
  
    constructor(private http: HttpClient) { }
  
    list(): Observable<Vendor[]> {
      return this.http.get<Vendor[]>(this.apiUrl);
    }
  
    get(id: number): Observable<Vendor> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Vendor>(url);
    }
  
    save(vendor: Vendor): Observable<Vendor> {
      return this.http.post<Vendor>(this.apiUrl, vendor);
    }
  
    update(vendor: Vendor): Observable<Vendor> {
      const url = `${this.apiUrl}/${vendor.id}`;
      return this.http.put<Vendor>(url, vendor);
    }
  
    delete(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }
  }