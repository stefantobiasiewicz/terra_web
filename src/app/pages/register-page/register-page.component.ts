import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/custom-validators';
import { RegisterModel } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent{
  public registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.isValidPassword()]],
      repeatPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
    },
    {
      validators: [CustomValidators.match('password', 'repeatPassword')]
    });
  }

  public submit() {
    let registerModel: RegisterModel = {
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value,
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
    };
    this.authService.register(registerModel).subscribe({
      next: () => {
        //TODO
      },
      error: () => {
        // TODO toast/notif
      },
    });
  }

  public redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
