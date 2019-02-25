import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertiseService } from 'src/app/advertise.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/response/product';
import { Advertise } from 'src/app/response/advertise';

@Component({
  selector: 'app-advertises-form',
  templateUrl: './advertises-form.component.html',
  styleUrls: ['./advertises-form.component.scss']
})
export class AdvertisesFormComponent implements OnInit, OnChanges {

  public image: File;
  public base64: string;
  public form: FormGroup;
  public onEdit: boolean;
  public edited: Advertise;
  public reader: FileReader;
  public products: Product[];
  public cloudinary: string;

  @Output() result: EventEmitter<boolean> = new EventEmitter();
  @Input() public advertise: Advertise;

  constructor(
    private _advertise: AdvertiseService,
    private _dialog: MatDialog,
    private _bar: MatSnackBar,
    private _product: ProductService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['advertise'].currentValue != null) {
      this.onEdit = true;
      this.edit(changes['advertise'].currentValue);
    }
  }

  private edit(advertise: Advertise) {
    this.buildForm(true);
    this.form.get('description').setValue(advertise.description);
    this.form.get('product_id').setValue(advertise.product.id);
    this.cloudinary = advertise.image.url;
    this.edited = advertise;
    this.form.markAsDirty();
  }

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
      this.buildForm();
      this.result.emit(true);
      this.cloudinary = null;
    });
  }

  public update() {
    const loading = this._dialog.open(LoadingPopupComponent, { data: 'Updating, please wait' });
    this._advertise.update(this.edited, this.form.value).subscribe((response) => {
      loading.close();
      this._bar.open('Uploaded Successfully', null, { duration: 2000 });
      this.base64 = null;
      this.buildForm();
      this.result.emit(true);
      this.onEdit = false;
      this.cloudinary = null;
    });
  }

  private readerHandeler(e) {
    const reader = e.target;
    this.base64 = reader.result;
    this.form.get('image').setValue(this.base64);
  }

  private buildForm(edited: boolean = false) {
    if (edited) {
      this.form = new FormGroup({
        description: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        image: new FormControl('', []),
        product_id: new FormControl(null, [Validators.required])
      });
    } else {
      this.form = new FormGroup({
        description: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        image: new FormControl('', [
          Validators.required,
        ]),
        product_id: new FormControl(null, [Validators.required])
      });
    }
  }

  public submit() {
    if (this.onEdit) {
      this.update();
    } else {
      this.create();
    }
  }

  public clearForm() {
    this.onEdit = false;
    this.base64 = null;
    this.edited = null;
    this.cloudinary = null;
    this.form.reset();
  }
}
