import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { ServerService } from 'src/app/server.service';
import { MaterialPurchased } from 'src/app/material-purchased';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialPuchasing } from '../../request/material-puchasing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-purchasing',
  templateUrl: './material-purchasing.component.html',
  styleUrls: ['./material-purchasing.component.scss']
})
export class MaterialPurchasingComponent implements OnInit {

  public loading: boolean;
  public name: FormControl;
  public price: FormControl;
  public quantity: FormControl;
  public materialPurchase: FormGroup;

  protected options: string[];
  protected headers: string[];
  protected data: MaterialPurchased[];
  protected filteredOptions: Observable<string[]>;
  protected datasource: MatTableDataSource<MaterialPurchased>;
  protected spinner: MatProgressButtonOptions;

  constructor(
    private server: ServerService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loading = true;
    this.fetchProviders();
    this.headers = ['position', 'name', 'quantity', 'price', 'action'];
    this.data = [];
    this.options = [];
    this.buildForms();
    this.filteredOptions = this.materialPurchase.controls['provider'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.buildSubmitButton();
  }

  private buildSubmitButton() {
    this.spinner = {
      active: false,
      text: 'Submit Purchasing',
      spinnerSize: 19,
      raised: true,
      stroked: false,
      buttonColor: 'accent',
      spinnerColor: 'primary',
      fullWidth: false,
      disabled: false,
      mode: 'indeterminate',
    };
  }

  private buildForms() {
    const today = new Date();
    this.datasource = new MatTableDataSource<MaterialPurchased>(this.data);
    this.materialPurchase = new FormGroup({
      provider: new FormControl('', [Validators.required]),
      date: new FormControl({ value: today, disabled: true }, [Validators.required]),
      invoice: new FormControl('', [Validators.required, Validators.max(15)]),
      amount: new FormControl({ value: 0, disabled: true }, [Validators.required]),
      note: new FormControl('', [])
    });
    this.name = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.quantity = new FormControl('', [Validators.required]);
  }

  public fetchProviders() {
    this.server.provderIndex().subscribe(providers => {
      providers.forEach(provider => {
        this.options.push(provider.name);
      });
      this.loading = false;
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public removeFromList(name: string) {
    const data = this.datasource.data;
    data.map((item, key) => {
      if (item.name === name) {
        const removed = data.splice(key, 1);
        const sum = this.materialPurchase.get('amount').value - (removed[0].price * removed[0].quantity);
        this.materialPurchase.get('amount').setValue(sum);
      }
    });
    this.datasource.data = data;
  }

  public materialValid(): boolean {
    return (this.name.valid && this.price.valid && this.quantity.valid);
  }

  public addMaterial() {
    const data = this.datasource.data;
    data.push({ name: this.name.value, price: this.price.value, quantity: this.quantity.value });
    const sum = this.materialPurchase.get('amount').value + (this.price.value * this.quantity.value);
    this.materialPurchase.get('amount').setValue(sum);
    this.datasource.data = data;
    this.resetMaterial();
  }


  private resetMaterial() {
    this.name.reset();
    this.price.reset();
    this.quantity.reset();
  }

  public sendForm() {
    const body: MaterialPuchasing = {
      provider: {
        name: this.materialPurchase.controls['provider'].value,
      },
      purchase: {
        invoice: this.materialPurchase.controls['invoice'].value,
        amount: this.materialPurchase.controls['amount'].value,
        note: this.materialPurchase.controls['note'].value,
        purchased_at: this.materialPurchase.controls['date'].value,
      },
      materials: this.datasource.data,
    };

    this.spinner.active = true;
    this.server.materialPurchasing(body).subscribe((response) => {
      if (response.purchasing.code === 200) {
        this.router.navigate(['/materials']);
        this.snackbar.open('Successfully submit Purchase', 'close', {
          duration: 2000
        });
      } else {
        this.spinner.active = false;
        this.snackbar.open('Please recheck the form', 'close', {
          duration: 2000
        });
      }
    });
  }
}
