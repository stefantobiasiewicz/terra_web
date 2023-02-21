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
  private readonly deviceUrl: string = `${environment.deviceUrl}/`;
  private readonly allDevicesUrl: string = `${environment.deviceUrl}/all/`;
  private readonly addFeviceUrl: string = `${environment.deviceUrl}/add/`;
  private readonly renameDeviceUrl: string = `${environment.deviceUrl}/name/`;

  constructor(private http: HttpClient,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  public getDevices(userId:number): Observable<DeviceModel[]> {
    return this.http.get<DeviceModel[]>(
        this.allDevicesUrl+userId
      );
  }

  public registerDevice(mac: string, userId:number) {
    let headers = { 'content-type': 'application/json' };
    return this.http.post<any>(this.addFeviceUrl+userId+'/'+mac, {
      headers: headers
    });
  }

  public renameDevice(name: string, userId:number, deviceId:number) {
    let headers = { 'content-type': 'application/json' };
    let request : any = {
      name:name
    }
    return this.http.post<any>(this.renameDeviceUrl+userId+'/'+deviceId, JSON.stringify(request), {
      headers: headers
    });
  }

  public removeDevice(userId:number, deviceId:number) {
    let headers = { 'content-type': 'application/json' };

    return this.http.delete<any>(this.deviceUrl+userId+'/'+deviceId, {
      headers: headers
    });
  }
}
