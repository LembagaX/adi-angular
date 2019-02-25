import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertiseService } from 'src/app/advertise.service';

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

  constructor(
    private _advertise: AdvertiseService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public imageHandler(event) {
    this.image = <File>event.target.files[0];
    this.reader = new FileReader;
    this.reader.onload = this.readerHandeler.bind(this);
    this.reader.readAsDataURL(this.image);
  }

  public create() {
    this._advertise.create(this.form.value).subscribe((response) => {
      console.log(response);
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
      product_id: new FormControl(1, [])
    });
  }
}
