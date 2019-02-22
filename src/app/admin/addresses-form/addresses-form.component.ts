import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/response/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from 'src/app/address.service';
import { Address } from 'src/app/response/address';
import { Address as Request } from 'src/app/request/address';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent implements OnInit {

  @Input() customer: Customer;
  @Input() address: Address;
  @Output() result = new EventEmitter<boolean>();

  public form: FormGroup;

  constructor(
    private _service: AddressService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<LoadingPopupComponent>
  ) { }

  ngOnInit() {
    console.log(this.customer);
    this.buildForm();
  }

  public submit() {
    if (this.address) {
      this._dialogRef = this._dialog.open(LoadingPopupComponent, { data: 'Updating Address' });
    } else {
      this._dialogRef = this._dialog.open(LoadingPopupComponent, { data: 'Creating Address' });
    }
    const request: Request = {
      address: {
        address: this.form.get('address').value
      }
    };

    if (this.address) {
      this.update(request, this._dialogRef);
    } else {
      this.create(request, this._dialogRef);
    }
  }

  private create(request: Request, dialogRef) {
    this._service.create(this.customer, request).subscribe(response => {
      dialogRef.close();
      this.result.emit(true);
    });
  }

  private update(request: Request, dialogRef) {
    this._service.update(this.customer, this.address, request).subscribe(response => {
      dialogRef.close();
      this.result.emit(true);
    });
  }

  private buildForm() {
    if (this.address) {
      this.form = new FormGroup({
        address: new FormControl(this.address.address, [Validators.required, Validators.minLength(6), Validators.maxLength(120)])
      });
    } else {
      this.form = new FormGroup({
        address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(120)])
      });
    }
  }
}
