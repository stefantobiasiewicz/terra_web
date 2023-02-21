import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DeviceService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-rename-device-modal',
  templateUrl: './rename-device-modal.component.html',
  styleUrls: ['./rename-device-modal.component.css']
})
export class RenameDeviceModalComponent implements OnInit {
  private name?: string;
  public renameDeviceForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<RenameDeviceModalComponent>,
    private deviceService: DeviceService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.renameDeviceForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.name = this.renameDeviceForm.get('name')!.value
    console.log(this.name)
    this.deviceService.renameDevice(this.name!, this.authService.getUserFromToken()?.id!, this.data.id).subscribe(
      {
        next: () => {
          this.snackBar.open('Device successfully renamed!', 'Close', {
            duration: 3000,
          });
          // this.router.navigateByUrl('/home');
        },
        error: () => {
          this.snackBar.open('Device rename failed!', 'Close', {
            duration: 3000
          });
        }
      }
    );
    this.dialogRef.close();
  }
  
}
