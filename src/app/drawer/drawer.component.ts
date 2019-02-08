import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SubmitPopupComponent } from '../partials/submit-popup/submit-popup.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {

  public user: User;
  public active: string;

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
    this.active = this.router.url;
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

  public activeUrl(url: string): string {
    return this.active.includes(url) ? 'primary' : '';
  }
}
