import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Material } from 'src/app/response/material';
import { ServerService } from 'src/app/server.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/auth.service';
import { SubmitPopupComponent } from 'src/app/partials/submit-popup/submit-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-depreciation',
  templateUrl: './material-depreciation.component.html',
  styleUrls: ['./material-depreciation.component.scss']
})
export class MaterialDepreciationComponent implements OnInit {

  public loading: boolean;
  public materials: Material[];
  public materialForm: FormGroup;
  public deprecationForm: FormGroup;
  public filteredMaterials: Observable<Material[]>;

  protected user: User;
  protected current: Material;

  constructor(
    private server: ServerService,
    private dialog: MatDialog,
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loading = true;
    this.fetchMaterials();
    this.user = this.auth.currentUser();
  }

  private filterOptions() {
    this.filteredMaterials = this.materialForm.controls['material'].valueChanges
      .pipe(
        startWith<string | Material>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.materials.slice())
      );
  }

  private buildForm() {
    this.materialForm = new FormGroup({
      material: new FormControl('', [Validators.required])
    });
    this.deprecationForm = new FormGroup({
      provider: new FormControl('', [Validators.required]),
      price: new FormControl({value: 0, disabled: true}, [Validators.required]),
      depreciation: new FormControl({value: 0, disabled: true}, [Validators.required]),
      quantity: new FormControl({ value: 0, disabled: true }, [Validators.required, Validators.min(1)]),
      note: new FormControl('', [Validators.required, Validators.maxLength(255), Validators.minLength(6)]),
      author: new FormControl(this.user, [Validators.required, Validators.maxLength(255), Validators.minLength(6)])
    });
  }

  public fetchMaterials() {
    this.server.materialIndex().subscribe((response) => {
      this.materials = response;
      this.buildForm();
      this.filterOptions();
      this.loading = false;
      this.watchForm();
    });
  }

  public watchForm() {
    this.materialForm.controls['material'].valueChanges.subscribe( () => {
      if (this.materialForm.controls['material'].valid) {
        const dialogRef = this.dialog.open(LoadingPopupComponent, { data: 'Loading Material information'});
        this.server.materialShow(this.materialForm.controls['material'].value.slug).subscribe(response => {
          this.current = response;
          dialogRef.close();
        });
      }
    });

    this.deprecationForm.controls['provider'].valueChanges.subscribe(() => {
      if (this.deprecationForm.controls['provider'].valid) {
        this.deprecationForm.controls['price'].setValue(
          this.current.prices.find(price => price.provider_id === this.deprecationForm.controls['provider'].value.id).amount
        );
        this.deprecationForm.controls['quantity'].enable();
      }
    });

    this.deprecationForm.controls['quantity'].valueChanges.subscribe(() => {
      if (this.deprecationForm.controls['quantity'].valid) {
        this.deprecationForm.controls['depreciation'].setValue(
          this.deprecationForm.controls['price'].value * this.deprecationForm.controls['quantity'].value
        );
      }
    });
  }

  public fetchMaterial() {
  }

  public displaySlug(material?: Material): string | undefined {
    return material ? material.name : undefined;
  }

  private _filter(name: string): Material[] {
    const filterValue = name.toLowerCase();
    return this.materials.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public sendForm() {
    const dialogRef = this.dialog.open(SubmitPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.dialog.open(LoadingPopupComponent, { data: 'Creating Deprecation Report' });
        this.dialog.closeAll();
        this.router.navigate(['/materials']);
        this.snackbar.open('Sussessfully create Deprecation Report', 'close', { duration: 2000 });
      }
    });
  }
}
