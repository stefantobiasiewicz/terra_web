import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  public submit() {
    let loginModel: LoginModel = {
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value,
    };
    this.authService.login(loginModel).subscribe({
      next: (token: string) => {
        if (this.authService.saveAndDecodeToken(token) != null)
          this.router.navigateByUrl('/home');
      },
      error: () => {
        this.snackBar.open('Invalid credentials', 'Close', {
          duration: 3000
        });
      },
    });
  }

  public redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
