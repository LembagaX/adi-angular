import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/announcement.service';
import { MatTableDataSource } from '@angular/material';
import { Announcement } from 'src/app/response/announcement';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-announcements-table',
  templateUrl: './announcements-table.component.html',
  styleUrls: ['./announcements-table.component.scss']
})
export class AnnouncementsTableComponent implements OnInit {

  public form: FormGroup;
  public onEdit: boolean;
  public announcements: MatTableDataSource<Announcement>;
  private current: Announcement;
  public colors: { id: number; class: string; color: string}[];

  constructor(
    private _announce: AnnouncementService
  ) { }

  ngOnInit() {
    this.onEdit = false;
    this.colors = [
      {id: 0, class: 'text-info', color: 'info'},
      {id: 1, class: 'text-success', color: 'success'},
      {id: 2, class: 'text-warning', color: 'warning'},
      {id: 3, class: 'text-danger', color: 'danger'}
    ]
    this._announce.index().subscribe(response => this.announcements = new MatTableDataSource(response));
    this.form = new FormGroup({
      message: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
      color: new FormControl('', [Validators.required]),
      due: new FormControl(7, [Validators.required, Validators.min(1)])
    });
  }

  public submit() {
    if (this.onEdit) {
      this._announce.update(this.current, this.form.value).subscribe(response => {
      });
    } else {
      this._announce.create(this.form.value).subscribe(response => {
      });
    }
  }

  public destroy(announcement: Announcement) {
    this._announce.destroy(announcement).subscribe();
  }

  public edit(announcement: Announcement) {
    this.onEdit = true;
    this.current = announcement;
    this.form.get('message').setValue(announcement.message);
    this.form.get('color').setValue(announcement.color);
  }

}
