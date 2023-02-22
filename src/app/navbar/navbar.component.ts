import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public routes = [{
    name: "Home",
    path: "/home"
  }, {
    name: "Failed logins",
    path: "/failedLogins"
  }];

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  public home() {
    this.routeTo("/home");
  }

  public failedLogins() {
    this.routeTo("/failedLogins");
  }

  public routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  public login() {
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (token != null && this.authService.getUserFromToken() != null)
      return true;

    return false;
  }

  public isAdmin() : boolean {
    let user = this.authService.getUserFromToken()!
    return user.role === "ADMIN";
  }

}
