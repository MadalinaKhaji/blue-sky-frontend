import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiUrl = 'http://localhost:8081/api/user';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`);
  }

  public addUser(user): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }

}
