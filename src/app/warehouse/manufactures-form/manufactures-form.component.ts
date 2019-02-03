import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { ManufactureService } from 'src/app/manufacture.service';
import { Manufacture } from 'src/app/response/manufacture';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { AttachProductComponent } from '../attach-product/attach-product.component';

@Component({
  selector: 'app-manufactures-form',
  templateUrl: './manufactures-form.component.html',
  styleUrls: ['./manufactures-form.component.scss']
})
export class ManufacturesFormComponent implements OnInit {

  @Input() code: string;
  @Input() create: boolean;
  @Output() result =  new EventEmitter<Manufacture>();

  protected loading: boolean;
  protected manufacture: FormGroup;
  protected current: Manufacture;

  constructor(
    private auth: AuthService,
    private service: ManufactureService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    if (this.create) {
      this.createManufacture();
    } else {
      this.showManufacture();
    }
  }

  private showManufacture() {
    this.service.show(this.code).subscribe(response => {
      this.current = response;
      this.buildForm();
    });
  }

  public createManufacture() {
    this.service.create().subscribe(response => {
      this.current = response;
      this.buildForm();
    });
  }

  public buildForm() {
    this.manufacture = new FormGroup({
      user: new FormControl({ value: this.auth.currentUser().name, disabled: true }, []),
      code: new FormControl({ value: this.current.code, disabled: true }, [])
    });
    this.result.emit(this.current);
    this.loading = false;
  }

  public undo() {
    this.dialog.open(LoadingPopupComponent, { data: 'Destroying Manufacture' });
    this.service.destroy(this.current).subscribe(() => {
      this.router.navigate(['/manufactures']);
      this.dialog.closeAll();
    });
  }

  private rebuildCurrent() {
    this.service.show(this.current.code).subscribe(response => {
      this.result.emit(response);
    });
  }

  public attachProduct() {
    const dialogRef = this.dialog.open(AttachProductComponent, { width: '800px', data: { manufacture: this.current } });
    dialogRef.afterClosed().subscribe(() => {
      this.rebuildCurrent();
    });
  }
}
