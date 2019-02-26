import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/response/customer';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddressesCreateDialogComponent } from '../addresses-create-dialog/addresses-create-dialog.component';
import { CustomerService } from 'src/app/customer.service';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { Address } from 'src/app/response/address';
import { AddressService } from 'src/app/address.service';
import { CustomersAddressesEditComponent } from '../customers-addresses-edit/customers-addresses-edit.component';

@Component({
  selector: 'app-customers-addresses',
  templateUrl: './customers-addresses.component.html',
  styleUrls: ['./customers-addresses.component.scss']
})
export class CustomersAddressesComponent implements OnInit {

  @Input() customer: Customer;

  constructor(
    private _dialog: MatDialog,
    private _customer: CustomerService,
    private _address: AddressService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  public createAddress() {
    const dialog = this._dialog.open(AddressesCreateDialogComponent, { data: this.customer });
    dialog.afterClosed().subscribe(() => this._refetch());
  }

  public destroy(address: Address) {
    this._dialog.open(LoadingPopupComponent, { data: 'Deleting, please wait' });
    this._address.destroy(this.customer, address).subscribe(
      () => this._refetch(),
      err => {
        this._dialog.closeAll();
        this._snackbar.open('Tidak dapat menghapus alamat yang tersambung dengan Order', 'Close');
      }
    );
  }

  public edit(address: Address) {
    const dialog = this._dialog.open(CustomersAddressesEditComponent, { data: {
      customer: this.customer,
      address: address
    }});
    dialog.afterClosed().subscribe(() => this._refetch());
  }

  private _refetch() {
    this._customer.show(this.customer.phone).subscribe(response => {
      this.customer = response;
      this._dialog.closeAll();
    });
  }
}
