import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const router = inject(Router); // Inject Router for navigation on errors

      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        console.error('Client-side error:', error.error.message);
        alert('A network error occurred. Please check your internet connection.');
      } else {
        // Server-side error
        switch (error.status) {
          case 400:
            console.error('Bad Request:', error.error);
            alert('Bad Request! Please check your input.');
            break;

          case 401:
            console.error('Unauthorized:', error.error);
            alert('Session expired! Please log in again.');
            localStorage.removeItem('authToken'); // Clear token
            router.navigate(['/login']); // Redirect to login
            break;

          case 403:
            console.error('Forbidden:', error.error);
            alert('You do not have permission to access this resource.');
            break;

          case 404:
            console.error('Not Found:', error.error);
            alert('Requested resource not found!');
            break;

          case 500:
            console.error('Internal Server Error:', error.error);
            alert('Server error! Please try again later. API issues');
            break;

          default:
            console.error(`Unexpected Error (${error.status}):`, error.error);
            alert('Something went wrong! Please try again.');
        }
      }

      return throwError(() => error);
    })
  );

};
