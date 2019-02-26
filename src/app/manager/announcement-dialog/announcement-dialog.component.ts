import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Announcement } from 'src/app/response/announcement';

@Component({
  selector: 'app-announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.scss']
})
export class AnnouncementDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public announcement: Announcement
  ) { }

  ngOnInit() {
  }

}
