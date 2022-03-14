import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiUrl = 'api/user';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`);
  }

  public getUser(id): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  public addUser(user): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }

  public editUser(user): Observable<any> {
    return this.httpClient.put(this.apiUrl, user);
  }

  public deleteUser(id) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }

}
