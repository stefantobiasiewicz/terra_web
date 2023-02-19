import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeviceModel } from '../models/device.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private readonly deviceUrl: string = `${environment.deviceUrl}/all/`;

  constructor(private http: HttpClient,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  public getDevices(userId:number): Observable<DeviceModel[]> {
    return this.http.get<DeviceModel[]>(
        this.deviceUrl+userId
      );
  }
}
