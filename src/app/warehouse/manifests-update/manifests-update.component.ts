import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Manifest } from 'src/app/response/manifest';
import { Manifest as Request } from 'src/app/request/manifest';
import { Manufacture } from 'src/app/response/manufacture';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManifestService } from 'src/app/manifest.service';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-manifests-update',
  templateUrl: './manifests-update.component.html',
  styleUrls: ['./manifests-update.component.scss']
})
export class ManifestsUpdateComponent implements OnInit {

  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { manifest: Manifest, manufacture: Manufacture },
    private service: ManifestService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      quantity: new FormControl({ value: this.data.manifest.quantity, disabled: true }, []),
      detach: new FormControl(null, [Validators.required, Validators.max(this.data.manifest.quantity), Validators.min(0)]),
      new: new FormControl({ value: this.data.manifest.quantity, disabled: true }, [])
    });
    this.form.controls['detach'].valueChanges.subscribe((result) => {
      this.form.controls['new'].setValue(this.form.controls['quantity'].value - this.form.controls['detach'].value);
    });
  }

  public updateManifest() {
    this.dialog.open(LoadingPopupComponent, { data: 'Updating Manifest' });
    const body: Request = {
      manifest: {
        product_id: this.data.manifest.product.id,
        quantity: this.form.controls['new'].value
      }
    };
    this.service.update(this.data.manufacture, this.data.manifest, body).subscribe(() => {
      this.dialog.closeAll();
    });
  }

}
