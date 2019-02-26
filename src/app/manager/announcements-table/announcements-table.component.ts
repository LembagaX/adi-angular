import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/announcement.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Announcement } from 'src/app/response/announcement';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

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
    private _announce: AnnouncementService,
    private _load: MatDialog
  ) { }

  ngOnInit() {
    this.onEdit = false;
    this.colors = [
      {id: 0, class: 'text-info', color: 'info'},
      {id: 1, class: 'text-success', color: 'success'},
      {id: 2, class: 'text-warning', color: 'warning'},
      {id: 3, class: 'text-danger', color: 'danger'}
    ];
    this.fetch();
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
      color: new FormControl('', [Validators.required]),
      due: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  private fetch() {
    this.announcements = null;
    this._announce.index().subscribe(response => this.announcements = new MatTableDataSource(response));
  }

  public submit() {
    if (this.onEdit) {
      const dialog = this._load.open(LoadingPopupComponent, { data: 'Updating, please wait'});
      this._announce.update(this.current, this.form.value).subscribe(() => {
        this.fetch();
        this.buildForm();
        dialog.close();
      });
    } else {
      const dialog = this._load.open(LoadingPopupComponent, { data: 'Creating, please wait' });
      this._announce.create(this.form.value).subscribe(() => {
        this.fetch();
        this.buildForm();
        dialog.close();
      });
    }
  }

  public destroy(announcement: Announcement) {
    const dialog = this._load.open(LoadingPopupComponent, { data: 'Destroying, please wait' });
    this._announce.destroy(announcement).subscribe(() => {
      this.fetch();
      dialog.close();
    });
  }

  public edit(announcement: Announcement) {
    this.onEdit = true;
    this.current = announcement;
    this.form.get('message').setValue(announcement.message);
    this.form.get('color').setValue(announcement.color);
  }

  public reset() {
    this.buildForm();
    this.current = null;
    this.onEdit = false;
  }

}
