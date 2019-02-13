import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
import { Customer as Request } from 'src/app/request/customer';
import { Customer } from 'src/app/response/customer';
import { MatDialog } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent implements OnInit {

  @Input() phone: number;
  @Output() result = new EventEmitter<Customer>();

  public form: FormGroup;

  constructor(
    private _service: CustomerService,
    private _loading: MatDialog
  ) {}

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.form = new FormGroup({
      phone: new FormControl(this.phone, [
        Validators.required, Validators.minLength(8), Validators.maxLength(17),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(45)])
    });
  }

  public submit() {
    const dialogRef = this._loading.open(LoadingPopupComponent, { data: 'Creating Customer' });
    const customer: Request = {
      phone: this.form.get('phone').value,
      name: this.form.get('name').value
    };
    this._service.create(customer).subscribe(response => {
      this.result.emit(response);
      dialogRef.close();
    });
  }
}
