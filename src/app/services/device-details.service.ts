import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeviceDetailsModel } from '../models/device-details.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetailsService {
  private readonly deviceDetailsUrl: string = `${environment.deviceUrl}/`

  constructor(private http:HttpClient,
    private authService: AuthService
    ) { }

    public getDeviceDetails(userId:number, deviceId:number): Observable<DeviceDetailsModel> {
      return this.http.get<DeviceDetailsModel>(
        this.deviceDetailsUrl+userId+'/'+deviceId
      )
    }
}
