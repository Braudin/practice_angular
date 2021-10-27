import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comics } from '../interfaces/comics';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  url_api = environment.url_Api;
  constructor(private http: HttpClient) {}

  getComics(): Observable<Comics> {
    const url = `${this.url_api.base}/${this.url_api.v}/${this.url_api.m}/comics`;
    return this.http.get<Comics>(url).pipe(map((data: Comics) => data));
  }
}
