import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl: string = `${environment.backendUrl}/Authentication/Login`;

  constructor(private http: HttpClient) {}

  public login(loginModel: LoginModel): Observable<string> {
    let headers = { 'content-type': 'application/json' };
    return this.http.post<string>(this.loginUrl, JSON.stringify(loginModel), {headers: headers});
  }
}
