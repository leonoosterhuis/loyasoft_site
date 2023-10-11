import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.loyasoft.nl/api/v2'; // Vervang dit met de juiste basis-URL van jouw API

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.getHeaders();
    return this.http.get<T>(url, {headers});
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.getHeaders();
    return this.http.post<T>(url, data, {headers});
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer FGvKEaiUIGBOfeRJdi4GiEr9UD6RUijeaS33Llm5txabzu068T`
    });
  }


}
