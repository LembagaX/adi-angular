import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialService } from 'src/app/material.service';
import { Material } from 'src/app/response/material';
import { AssemblyService } from 'src/app/assembly.service';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Product } from 'src/app/response/product';
import { Assembly as Request } from 'src/app/request/assembly';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Assembly } from 'src/app/response/assembly';

@Component({
  selector: 'app-assemblies-create-dialog',
  templateUrl: './assemblies-create-dialog.component.html',
  styleUrls: ['./assemblies-create-dialog.component.scss']
})
export class AssembliesCreateDialogComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean;
  public materials: Material[];

  constructor(
    private material: MaterialService,
    private assembly: AssemblyService,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product, assembly: Assembly },
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<AssembliesCreateDialogComponent>,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.fetchMaterials();
  }

  public submit() {
    const request: Request = {
      material_id: this.form.controls['material_id'].value,
      quantity: this.form.controls['quantity'].value
    };

    if (this.data.assembly) {
      this.update(request);
    } else {
      this.create(request);
    }
  }

  private update(request: Request) {
    const loading = this.dialog.open(LoadingPopupComponent, { data: 'Updating Assembly' });
    this.assembly.update(this.data.product, this.data.assembly, request).subscribe(() => {
      loading.close();
      this.snackbar.open('Successfully updated Assembly', 'close', { duration: 2000 });
      this.dialogRef.close();
    });
  }

  private create(request: Request) {
    const loading = this.dialog.open(LoadingPopupComponent, { data: 'Creating Assembly' });
    this.assembly.create(this.data.product, request).subscribe(() => {
      loading.close();
      this.snackbar.open('Successfully created Assembly', 'close', { duration: 2000 });
      this.dialogRef.close();
    });
  }

  private fetchMaterials() {
    this.material.index().subscribe(response => {
      this.materials = response;
      this.buildForm();
      this.loading = false;
    });
  }

  private buildForm() {
    if (this.data.assembly) {
      this.form = new FormGroup({
        material_id: new FormControl(this.data.assembly.material.id, [Validators.required, Validators.min(1)]),
        quantity: new FormControl(this.data.assembly.quantity, [Validators.required, Validators.min(1)])
      });
    } else {
      this.form = new FormGroup({
        material_id: new FormControl(0, [Validators.required, Validators.min(1)]),
        quantity: new FormControl(1, [Validators.required, Validators.min(1)])
      });
    }
  }
}
