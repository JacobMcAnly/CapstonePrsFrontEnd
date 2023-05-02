import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from 'src/model/line-item.class';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  baseUrl: string = "http://localhost:8080/--baseUrl--"; 

  constructor(private http: HttpClient) { }

  list(requestId: number): Observable<LineItem[]> {
    return this.http.get<LineItem[]>(this.baseUrl + `requestlinesforrequest/${requestId}`);
  }

  get(lineItemId: number): Observable<LineItem> {
    return this.http.get<LineItem>(this.baseUrl + `requestlines/${lineItemId}`);
  }

  save(lineItem: LineItem): Observable<LineItem> {
    return this.http.post<LineItem>(this.baseUrl + "requestlines", lineItem);
  }

  update(lineItem: LineItem): Observable<any> {
    return this.http.put(this.baseUrl + `requestlines/${lineItem.id}`, lineItem);
  }

  delete(lineItemId: number): Observable<any> {
    return this.http.delete(this.baseUrl + `requestlines/${lineItemId}`);
  }

}