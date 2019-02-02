import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Product } from 'src/app/response/product';
import { Manufacture } from 'src/app/response/manufacture';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Manifest } from 'src/app/request/manifest';
import { ManifestService } from 'src/app/manifest.service';

@Component({
  selector: 'app-manifest-create',
  templateUrl: './manifest-create.component.html',
  styleUrls: ['./manifest-create.component.scss']
})
export class ManifestCreateComponent implements OnInit {

  public form: FormGroup;

  protected request: Manifest;
  protected loading: MatDialogRef<LoadingPopupComponent>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product, manufacture: Manufacture},
    public dialogRef: MatDialogRef<ManifestCreateComponent>,
    private dialog: MatDialog,
    private service: ManifestService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      quantity: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  public attach() {
    this.loading = this.dialog.open(LoadingPopupComponent, { data: 'Attaching Product ' });
    this.request = {
      manifest: {
        quantity: this.form.controls['quantity'].value,
        product_id: this.data.product.id
      }
    };
    this.service.create(this.data.manufacture, this.request).subscribe(() => {
      this.dialogRef.close(true);
      this.loading.close();
    });
  }
}
