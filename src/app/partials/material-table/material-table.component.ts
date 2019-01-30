import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar, MatDialog } from '@angular/material';
import { Material } from 'src/app/response/material';
import { ServerService } from 'src/app/server.service';
import { LoadingPopupComponent } from '../loading-popup/loading-popup.component';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  public datasource: MatTableDataSource<Material>;

  @Input() thead: string[];
  @Input() tbody: Material[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private server: ServerService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.datasource = new MatTableDataSource<Material>(this.tbody);
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  public materialDestroy(material: Material) {
    if (material.stock !== 0) {
      const dialogRef = this.dialog.open(LoadingPopupComponent, { data: 'Destroying Material' });
      this.server.materialDestroy(material).subscribe(() => {
        dialogRef.close();
        this.snackbar.open('Successfully Destroy Material', 'close', { duration: 3000 });
      },
      error => {
        dialogRef.close();
        this.snackbar.open('Unable to Destroy Material data due to stock', 'close', { duration: 3000 });
      });
    } else {
      this.snackbar.open('Unable to Destroy Material data due to stock', 'close', { duration: 3000 });
    }
  }
}
