import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FailedLogin } from 'src/app/models/failed-login.model';
import { AuthService } from 'src/app/services/auth.service';
import { FailedLoginService } from 'src/app/services/failed-login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public failedLogins?: FailedLogin[];

  constructor(private failedLoginService: FailedLoginService,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.failedLogins = this.failedLoginService.getFailedLogins(this.authService.user?.email, 1, 20);
    this.failedLoginService.getFailedLogins(this.authService.user?.email!, 0, 10).subscribe(
      {
        next: (failedLogins) => {
          this.failedLogins = failedLogins
        },
        error: () => {
          this.snackBar.open('Something went wrong', 'Close', {
            duration: 3000
          });
        }
      }
    )
  }

}
