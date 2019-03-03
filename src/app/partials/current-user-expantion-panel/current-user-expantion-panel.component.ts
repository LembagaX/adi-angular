import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/interfaces/user';
import { Role } from 'src/app/response/role';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-user-expantion-panel',
  templateUrl: './current-user-expantion-panel.component.html',
  styleUrls: ['./current-user-expantion-panel.component.scss']
})
export class CurrentUserExpantionPanelComponent implements OnInit {

  public user: User;
  public role: string;

  constructor(
    private _auth: AuthService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = this._auth.currentUser();
    this.role = this._auth.role();
  }

  public logout() {
    const ref = this._dialog.open(ConfirmationDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this._auth.logout();
        this._router.navigate(['/login']);
      } else {
        ref.close();
      }
    });
  }
}
