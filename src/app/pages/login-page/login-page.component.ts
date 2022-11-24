import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;
  public email  = new FormControl('', [
    Validators.required, Validators.email,
  ]);
  public password = new FormControl('', [
    Validators.required, 
    Validators.minLength(1)
  ]);

  
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  public submit() {
    this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        this.router.navigateByUrl('/');
                    }
                );
  }
}
