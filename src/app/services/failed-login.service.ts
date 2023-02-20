import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FailedLogin } from '../models/failed-login.model';

@Injectable({
  providedIn: 'root'
})
export class FailedLoginService {
  private readonly failedLoginUrl: string = `${environment.backendUrl}/login/failedLogins`;

  constructor(private http: HttpClient) { }

  public getFailedLogins(username:string, pageNumber:number, pageSize:number): Observable<FailedLogin[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username",username);
    queryParams = queryParams.append("pageNumber",pageNumber);
    queryParams = queryParams.append("pageSize",pageSize);


    return this.http.get<FailedLogin[]>(
        this.failedLoginUrl,
        {
          params:queryParams
        }
      );
  }
}
