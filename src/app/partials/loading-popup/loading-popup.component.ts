import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-loading-popup',
  templateUrl: './loading-popup.component.html',
  styleUrls: ['./loading-popup.component.scss']
})
export class LoadingPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

}
