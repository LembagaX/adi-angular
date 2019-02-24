import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/catalog.service';
import { Catalog } from 'src/app/request/catalog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-catalogs-form',
  templateUrl: './catalogs-form.component.html',
  styleUrls: ['./catalogs-form.component.scss']
})
export class CatalogsFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _catalog: CatalogService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<CatalogsFormComponent>
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  public submit() {
    const request: Catalog = this.form.value;
    const loading = this._dialog.open(LoadingPopupComponent, { data: 'Creating Catalog' });
    this._catalog.create(request).subscribe(response => {
      loading.close();
      this._dialogRef.close();
    });
  }
}
