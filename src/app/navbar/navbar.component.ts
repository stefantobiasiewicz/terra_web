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
  name:"Home",
  path:"/home"
}, {
  name:"Failed logins",
  path:"/failedLogins"
}];

  constructor(private router: Router,
    private authService : AuthService) { }

  ngOnInit(): void {
  }


  public routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
