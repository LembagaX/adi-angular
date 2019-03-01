import { Component, OnInit, Inject } from '@angular/core';
import { Log } from 'src/app/response/log';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-logs-dialog',
  templateUrl: './logs-dialog.component.html',
  styleUrls: ['./logs-dialog.component.scss']
})
export class LogsDialogComponent implements OnInit {

  public logs: MatTableDataSource<Log>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Log[],
  ) { }

  ngOnInit() {
    this.logs = new MatTableDataSource(this.data);
  }

}
