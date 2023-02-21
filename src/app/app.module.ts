import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { DeviceDetailsPageComponent } from './pages/device-details-page/device-details-page.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDeviceModalComponent } from './pages/add-device-modal/add-device-modal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RenameDeviceModalComponent } from './pages/rename-device-modal/rename-device-modal.component';
import { RemoveDeviceModalComponent } from './pages/remove-device-modal/remove-device-modal.component';
import { FailedLoginsPageComponent } from './pages/failed-logins-page/failed-logins-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    DeviceDetailsPageComponent,
    NavbarComponent,
    AddDeviceModalComponent,
    RenameDeviceModalComponent,
    RemoveDeviceModalComponent,
    FailedLoginsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
