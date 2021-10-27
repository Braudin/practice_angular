import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = environment.url_Api.key;

    let params = request.params;
    params = params.append('ts', environment.url_Api.ts);
    params = params.append('apikey', environment.url_Api.key);
    params = params.append('hash', environment.url_Api.hash);

    request = request.clone({
      params: params,
    });
    return next.handle(request).pipe(
      catchError((err) => {
        switch (err.status) {
          case 404:
            console.log('error 404');
            break;

          case 500:
            console.log('error 500');
            break;

          default:
            break;
        }
        return throwError(err);
      })
    );
  }
}
