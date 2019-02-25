import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertiseService } from 'src/app/advertise.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-advertises-form',
  templateUrl: './advertises-form.component.html',
  styleUrls: ['./advertises-form.component.scss']
})
export class AdvertisesFormComponent implements OnInit {

  public image: File;
  public base64: string;
  public form: FormGroup;
  public reader: FileReader;
  public products: Product[];

  @Output() result: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _advertise: AdvertiseService,
    private _dialog: MatDialog,
    private _bar: MatSnackBar,
    private _product: ProductService
  ) { }

  ngOnInit() {
    this.buildForm();
    this._product.index().subscribe(response => {
      this.products = response;
    });
  }

  public imageHandler(event) {
    this.image = <File>event.target.files[0];
    this.reader = new FileReader;
    this.reader.onload = this.readerHandeler.bind(this);
    this.reader.readAsDataURL(this.image);
  }

  public create() {
    const loading = this._dialog.open(LoadingPopupComponent, { data: 'Uploading, please wait' });
    this._advertise.create(this.form.value).subscribe((response) => {
      loading.close();
      this._bar.open('Uploaded Successfully', null, { duration: 2000 });
      this.base64 = null;
      this.form.reset();
      this.result.emit(true);
    });
  }

  private readerHandeler(e) {
    const reader = e.target;
    this.base64 = reader.result;
    this.form.get('image').setValue(this.base64);
  }

  private buildForm() {
    this.form = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      product_id: new FormControl(null, [])
    });
  }
}
