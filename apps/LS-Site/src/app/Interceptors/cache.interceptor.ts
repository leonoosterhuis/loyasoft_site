// Importeer de benodigde modules
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Cache-Control': 'max-age=86400',
      },
    });
    return next.handle(request);
  }
}
