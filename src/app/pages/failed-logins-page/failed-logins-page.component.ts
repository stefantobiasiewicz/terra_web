import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FailedLogin } from 'src/app/models/failed-login.model';
import { AuthService } from 'src/app/services/auth.service';
import { FailedLoginService } from 'src/app/services/failed-login.service';

@Component({
  selector: 'app-failed-logins-page',
  templateUrl: './failed-logins-page.component.html',
  styleUrls: ['./failed-logins-page.component.css']
})
export class FailedLoginsPageComponent implements OnInit {
  public failedLogins? : FailedLogin[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private failedLoginService: FailedLoginService) { }

  ngOnInit(): void {
    this.failedLoginService.getFailedLogins(this.authService.getUserFromToken()?.email!, 0, 10).subscribe(
      {
        next: (failedLogin) => {
          this.failedLogins = failedLogin
        },
        error: () => {
          this.snackBar.open('Could not get failed logins!', 'Close', {
            duration: 3000
          });
        }
      }
    )
  }

}
