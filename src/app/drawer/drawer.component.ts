import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { User } from '../interfaces/user';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SubmitPopupComponent } from '../partials/submit-popup/submit-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {

  protected user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.auth.currentUser();
  }

  public logout() {
    const dialogRef = this.dialog.open(SubmitPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.dialog.closeAll();
        this.auth.logout();
        this.router.navigate(['/login']);
        this.snackbar.open('Successfuly log you out', 'close', { duration: 2000 });
      } else {
        this.dialog.closeAll();
      }
    });
  }
}
