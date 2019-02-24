import { Component, OnInit, Input, Inject } from '@angular/core';
import { Catalog } from 'src/app/request/catalog';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-catalogs-form-dialog',
  templateUrl: './catalogs-form-dialog.component.html',
  styleUrls: ['./catalogs-form-dialog.component.scss']
})
export class CatalogsFormDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Catalog
  ) { }

  ngOnInit() {
  }

}
