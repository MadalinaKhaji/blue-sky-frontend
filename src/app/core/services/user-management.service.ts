import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiUrl = 'api/user';

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    
    return throwError('Something bad happened; please try again later.');
  };

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`).pipe(catchError(this.handleError));
  }

  public getUser(id): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  public addUser(user): Observable<any> {
    return this.httpClient.post(this.apiUrl, user).pipe(catchError(this.handleError));
  }

  public editUser(user): Observable<any> {
    return this.httpClient.put(this.apiUrl, user).pipe(catchError(this.handleError));
  }

  public deleteUser(id) {
    return this.httpClient.delete(this.apiUrl + '/' + id).pipe(catchError(this.handleError));
  }

}
