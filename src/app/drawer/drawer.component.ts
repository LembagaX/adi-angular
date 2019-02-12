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
  public links: { link: string; icon: string; text: string; }[];

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
    this.buildSidebar();
  }

  private buildSidebar() {
    if (this.auth.isAdmin()) {
      this.links = [
        { link: '/dashboard', icon: 'dashboard', text: 'Dashboard' },
        { link: '/users', icon: 'supervised_user_circle', text: 'Users Management' },
        { link: '/orders', icon: 'payment', text: 'Orders' },
        { link: '/users', icon: 'verified_user', text: 'Customer' },
        { link: '/products', icon: 'layers', text: 'Products' },
        { link: '/categories', icon: 'category', text: 'Categories' },
        { link: '/dashboard', icon: 'assignment', text: 'Sales Docs' },
      ];
    } else if (this.auth.isWarehouse()) {
      this.links = [
        { link: '/dashboard', icon: 'dashboard', text: 'Dashboard' },
        { link: '/materials', icon: 'ballot', text: 'Materials' },
        { link: '/manufactures', icon: 'build', text: 'Manufactures' },
        { link: '/products', icon: 'layers', text: 'Products' },
        { link: '/categories', icon: 'category', text: 'Categories' },
      ];
    }
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
