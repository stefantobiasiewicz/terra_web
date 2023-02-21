import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DeviceService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-remove-device-modal',
  templateUrl: './remove-device-modal.component.html',
  styleUrls: ['./remove-device-modal.component.css']
})
export class RemoveDeviceModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RemoveDeviceModalComponent>,
    private deviceService: DeviceService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.deviceService.removeDevice(this.authService.getUserFromToken()?.id!, this.data.id).subscribe(
      {
        next: () => {
          this.snackBar.open('Device successfully removed!', 'Close', {
            duration: 3000,
          });
          // this.router.navigateByUrl('/home');
        },
        error: () => {
          this.snackBar.open('Device removal failed!', 'Close', {
            duration: 3000
          });
        }
      }
    );
    this.dialogRef.close();
  }
}
