import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from 'src/app/response/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  @Input() public announcement: Announcement;

  constructor() { }

  ngOnInit() {
  }

}
