import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { User } from '../models/user.model';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl: string = `${environment.backendUrl}/auth/authenticate`;
  private readonly registerUrl: string = `${environment.backendUrl}/auth/register`;

  public user?: User;

  constructor(private http: HttpClient) {}

  public register(registerModel: RegisterModel): Observable<string> {
    let headers = { 'content-type': 'application/json' };
    return this.http.post<string>(
      this.registerUrl,
      JSON.stringify(registerModel),
      { headers: headers }
    );
  }

  public login(loginModel: LoginModel): Observable<any> {
    let headers = { 'content-type': 'application/json' };
    return this.http.post<any>(this.loginUrl, JSON.stringify(loginModel), {
      headers: headers,
    });
  }

  public logout() {
    this.user=undefined;
    localStorage.removeItem('token');
  }

  public saveAndDecodeToken(token: any): User | null {
    try {
      let user = jwtDecode<User>(token.token);
      localStorage.setItem('token', token.token);
      this.user = user;
      return user;
    } catch (Error) {
      return null;
    }
  }
}
