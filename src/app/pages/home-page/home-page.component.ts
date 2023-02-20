import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeviceModel } from 'src/app/models/device.model';
import { FailedLogin } from 'src/app/models/failed-login.model';
import { AuthService } from 'src/app/services/auth.service';
import { DeviceService } from 'src/app/services/devices.service';
import { FailedLoginService } from 'src/app/services/failed-login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public devices?: DeviceModel[];

  constructor(private deviceService: DeviceService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  // ngOnInit(): void {
  //   this.failedLoginService.getFailedLogins(this.authService.user?.email!, 0, 10).subscribe(
  //     {
  //       next: (failedLogins) => {
  //         this.failedLogins = failedLogins
  //       },
  //       error: () => {
  //         this.snackBar.open('Something went wrong', 'Close', {
  //           duration: 3000
  //         });
  //       }
  //     }
  //   )
  // }

  ngOnInit(): void {
    // TOOD : CHANGE IDS
    this.deviceService.getDevices(this.authService.user?.id!).subscribe(
      {
        next: (device) => {
          this.devices = device
        },
        error: () => {
          this.snackBar.open('Could not get devices!', 'Close', {
            duration: 3000
          });
        }
      }
    )
  }

  public openDetails(id:number) {
    this.router.navigateByUrl(`/devices/${id}/details`);
  }

}
