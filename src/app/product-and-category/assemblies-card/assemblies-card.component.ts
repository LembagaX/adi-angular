import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/response/product';
import { Assembly } from 'src/app/response/assembly';
import { AssemblyService } from 'src/app/assembly.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/partials/confirmation-dialog/confirmation-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';
import { AssembliesCreateDialogComponent } from '../assemblies-create-dialog/assemblies-create-dialog.component';

@Component({
  selector: 'app-assemblies-card',
  templateUrl: './assemblies-card.component.html',
  styleUrls: ['./assemblies-card.component.scss']
})
export class AssembliesCardComponent implements OnInit {

  @Input() product: Product;

  public assemblies: Assembly[];

  constructor(
    private service: AssemblyService,
    private dialog: MatDialog,
    private snakbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.fetch();
  }

  public destroyAssembly(assembly: Assembly) {
    const confirmation = this.dialog.open(ConfirmationDialogComponent);
    confirmation.afterClosed().subscribe(result => {
      if (result) {
        const loading = this.dialog.open(LoadingPopupComponent, { data: 'Destroying Assembly'});
        this.service.destroy(this.product, assembly).subscribe(response => {
          loading.close();
          this.snakbar.open('Successfully Destroyed Assembly', 'close', { duration: 2000 });
          this.fetch();
        });
      }
    });
  }

  public create() {
    const dialogRef = this.dialog.open(AssembliesCreateDialogComponent, { data: { product: this.product }, width: '50%' });
    dialogRef.afterClosed().subscribe(() => {
      const loading = this.dialog.open(LoadingPopupComponent, { data: 'Creating Assembly' });
      loading.close();
      this.fetch();
    });
  }

  public edit(assembly: Assembly) {
    const dialogRef = this.dialog.open(AssembliesCreateDialogComponent,
      { data: { product: this.product, assembly: assembly }, width: '50%' }
    );
    dialogRef.afterClosed().subscribe(() => {
      const loading = this.dialog.open(LoadingPopupComponent, { data: 'Updating Assembly' });
      loading.close();
      this.fetch();
    });
  }

  private fetch() {
    this.service.index(this.product).subscribe(response => this.assemblies = response.assemblies);
  }

}
