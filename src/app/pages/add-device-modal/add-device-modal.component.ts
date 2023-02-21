import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { DeviceService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.component.html',
  styleUrls: ['./add-device-modal.component.css']
})
export class AddDeviceModalComponent implements OnInit {
  private mac?: string;
  public registerDeviceForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddDeviceModalComponent>,
    private deviceService: DeviceService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.registerDeviceForm = this.fb.group({
      deviceCode: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.mac = this.registerDeviceForm.get('deviceCode')!.value
    console.log(this.mac)
    this.deviceService.registerDevice(this.mac!, this.authService.user?.id!).subscribe(
      {
        next: () => {
          this.snackBar.open('Device registered!', 'Close', {
            duration: 3000,
          });
        },
        error: () => {
          this.snackBar.open('Device register failed!', 'Close', {
            duration: 3000
          });
        }
      }
    );
  }

}
