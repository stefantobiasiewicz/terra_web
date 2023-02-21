import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsPageComponent } from './pages/device-details-page/device-details-page.component';
import { FailedLoginsPageComponent } from './pages/failed-logins-page/failed-logins-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FailedLoginService } from './services/failed-login.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },  
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'devices/:id/details',
    component: DeviceDetailsPageComponent,
  },
  {
    path: 'failedLogins',
    component: FailedLoginsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
