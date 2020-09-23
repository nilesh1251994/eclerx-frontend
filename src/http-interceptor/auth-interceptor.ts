import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  currentUrl:any;


  constructor(private router:Router) {
   this.currentUrl =  this.router.url
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const header =  {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json , text/plain , */*"
      }
      const authReq = request.clone({
        setHeaders: header
      });
      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
        },
        (err: any) => {
         
      }));
       
    }
  }