import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/response/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from 'src/app/address.service';
import { Address } from 'src/app/request/address';
import { MatDialog } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent implements OnInit {

  @Input() customer: Customer;
  @Output() result = new EventEmitter<boolean>();

  public form: FormGroup;

  constructor(
    private _service: AddressService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.customer);
    this.buildForm();
  }

  public submit() {
    const dialogRef = this._dialog.open(LoadingPopupComponent, { data: 'Creating Address' });
    const request: Address = {
      address: {
        address: this.form.get('address').value
      }
    };

    this._service.create(this.customer, request).subscribe(response => {
      dialogRef.close();
      this.result.emit(true);
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(120)])
    });
  }
}
