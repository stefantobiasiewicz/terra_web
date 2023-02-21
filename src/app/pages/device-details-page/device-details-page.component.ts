import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetailsModel } from 'src/app/models/device-details.model';
import { AuthService } from 'src/app/services/auth.service';
import { DeviceDetailsService } from 'src/app/services/device-details.service';

@Component({
  selector: 'app-device-details-page',
  templateUrl: './device-details-page.component.html',
  styleUrls: ['./device-details-page.component.css']
})
export class DeviceDetailsPageComponent implements OnInit {
  private deviceId?: number;
  public devicesDetails?: DeviceDetailsModel;
  public deviceDetailsForm!: FormGroup;

  constructor(private deviceDetailsService: DeviceDetailsService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private route: ActivatedRoute ) {
    this.deviceDetailsForm = this.fb.group({
      id: [0],
      name: [''],
      status: [''],
      temperature: [0.0],
      humidity: [0.0],
      pressure: [0.0],
      setTemp: [0.0],
      onOff: [false],
      light: [false],
      doors: [false],
      fan: [false],
      humidifier: [false],
    });
  }

  ngOnInit(): void {
 
    this.deviceId = parseInt(this.route.snapshot.paramMap.get('id')!);
       // TODO : CHANGE IDS
    this.deviceDetailsService.getDeviceDetails(this.authService.getUserFromToken()?.id!, this.deviceId).subscribe(
      {
        next: (device) => {
          this.devicesDetails = device;

          this.deviceDetailsForm.patchValue({
            id:device.device.id,
            name:device.device.name,
            status:device.device.status,
            temperature:device.envInfo.temperature,
            humidity:device.envInfo.humidity,
            pressure:device.envInfo.pressure,
            setTemp:device.heater.setTemp,
            onOff:device.heater.onOff,
            light:device.light,
            doors:device.doors,
            fan:device.fan,
            humidifier:device.humidifier
          })
        },
        error: () => {
          this.snackBar.open('Device not found!', 'Close', {
            duration: 3000
          });
        }
      }
    )
  }

  public submit() {
    let formData: any = {
      light: this.deviceDetailsForm.get('light')!.value,
      fan: this.deviceDetailsForm.get('fan')!.value,
      humidifier: this.deviceDetailsForm.get('humidifier')!.value,
      heater: {
        onOff:this.deviceDetailsForm.get('onOff')!.value,
        setTemp:this.deviceDetailsForm.get('setTemp')!.value,
      }
    };

    this.deviceDetailsService.postUpdateDeviceDetails(this.authService.getUserFromToken()?.id!, this.deviceId!, formData).subscribe({
      next: () => {
        this.snackBar.open('Updated succesfully!', 'Close', {
          duration: 3000,
        });
      },
      error: () => {
        this.snackBar.open('Could not update device data', 'Close', {
          duration: 3000,
        });
      },
    });
  }

}
