import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { Log } from 'src/app/response/log';
import { MatDialog } from '@angular/material';
import { LogsDialogComponent } from '../logs-dialog/logs-dialog.component';

@Component({
  selector: 'app-history-expantion-panel',
  templateUrl: './history-expantion-panel.component.html',
  styleUrls: ['./history-expantion-panel.component.scss']
})
export class HistoryExpantionPanelComponent implements OnInit {

  public logs: Log[];

  constructor(
    private _log: LogService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this._log.index().subscribe(response => this.logs = response);
  }

  public showLogs() {
    this._dialog.open(LogsDialogComponent, {
      data: this.logs,
      width: '90%'
    });
  }

}
