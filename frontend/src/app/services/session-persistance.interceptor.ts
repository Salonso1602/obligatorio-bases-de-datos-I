import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SessionPersistanceInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('user_id');

    if (idToken) {
      const cloned = req.clone({
        setHeaders : {
          authorization : idToken
        }
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
