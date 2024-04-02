import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, IUser, IUserResponse } from '@app/core/models/auth.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(data: ILogin): Observable<IUserResponse> {
    // return this._http.post<IUserResponse>('auth/local', data);
    return of(<IUserResponse> {
      jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5MzUwNjYwLCJleHAiOjE2Mjk5MzcxNjB9',
      user:  <IUser> {
        id: 1,
        username: 'admin',
        email: '',
        provider: 'local',
        confirmed: true,
        blocked: false,
        created_at: new Date(),
        updated_at: new Date()
      }   
    });
  }
}
