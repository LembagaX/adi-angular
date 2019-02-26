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
        { link: '/customers', icon: 'verified_user', text: 'Customer' },
        { link: '/products', icon: 'layers', text: 'Products' },
        { link: '/advertises', icon: 'burst_mode', text: 'Advertises' },
        { link: '/categories', icon: 'category', text: 'Categories' },
        { link: '/', icon: 'open_in_new', text: 'Site' }
      ];
    } else if (this.auth.isWarehouse()) {
      this.links = [
        { link: '/dashboard', icon: 'dashboard', text: 'Dashboard' },
        { link: '/categories', icon: 'category', text: 'Categories' },
        { link: '/products', icon: 'layers', text: 'Products' },
        { link: '/materials', icon: 'ballot', text: 'Materials' },
        { link: '/manufactures', icon: 'build', text: 'Manufactures' },
      ];
    } else if (this.auth.isManager()) {
      this.links = [
        { link: '/dashboard', icon: 'dashboard', text: 'Dashboard' },
        { link: '/announcements', icon: 'announcement', text: 'Note' },
        { link: '/analytics/materials', icon: 'ballot', text: 'Materials' },
        { link: '/analytics/depreciations', icon: 'warning', text: 'Depreciations' }
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
