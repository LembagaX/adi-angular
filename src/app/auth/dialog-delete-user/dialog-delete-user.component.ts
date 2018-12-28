import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {

  protected response: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private server: ServerService
  ) { }

  ngOnInit() {
  }

  public deleteUser(id: number) {
    this.server.deleteUser(id).subscribe(response => {
      this.response = response.code;
    });
  }
}
