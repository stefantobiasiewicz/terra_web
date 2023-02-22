import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  public displayedColumns = ['username', 'date'];
  public dataSource?: MatTableDataSource<FailedLogin>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private failedLoginService: FailedLoginService) { }

  ngOnInit(): void {
    this.failedLoginService.getFailedLogins(this.authService.getUserFromToken()?.email!, 0, 100).subscribe(
      {
        next: (failedLogin) => {
          this.failedLogins = failedLogin;
          this.dataSource = new MatTableDataSource(failedLogin)!;
        },
        error: () => {
          this.snackBar.open('Could not get failed logins!', 'Close', {
            duration: 3000
          });
        }
      }
    )
  }

  // ngAfterViewInit() {
  //   this.dataSource!.paginator = this.paginator!;
  //   this.dataSource!.sort = this.sort!;
  // }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource!.filter = filterValue;
  // }


}
