import { Product } from 'src/model/product.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private apiUrl = 'http://localhost:8080/products';
  
    constructor(private http: HttpClient) { }
  
    list(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }
  
    get(id: number): Observable<Product> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Product>(url);
    }
  
    save(product: Product): Observable<Product> {
      return this.http.post<Product>(this.apiUrl, product);
    }
  
    update(product: Product): Observable<Product> {
      const url = `${this.apiUrl}/${product.id}`;
      return this.http.put<Product>(url, product);
    }
  
    delete(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }
  }
  