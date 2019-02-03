import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Manufacture } from 'src/app/response/manufacture';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Manifest } from 'src/app/response/manifest';
import { ManifestsUpdateComponent } from '../manifests-update/manifests-update.component';
import { ManifestService } from 'src/app/manifest.service';

@Component({
  selector: 'app-manifests-table',
  templateUrl: './manifests-table.component.html',
  styleUrls: ['./manifests-table.component.scss']
})
export class ManifestsTableComponent implements OnInit {

  @Input() manufacture: Manufacture;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public headers: string[];
  public manifests: MatTableDataSource<Manifest>;

  constructor(
    private dialog: MatDialog,
    private service: ManifestService
  ) { }

  ngOnInit() {
    this.buildTable();
  }

  private buildTable() {
    this.headers = ['id', 'product', 'code', 'quantity', 'detach'];
    this.manifests = new MatTableDataSource<Manifest>(this.manufacture.manifests);
    this.manifests.paginator = this.paginator;
    this.manifests.sort = this.sort;
  }

  public rebuildTable(manifests: Manifest[]) {
    this.manifests.data = manifests;
  }

  public applyFilter(filterValue: string) {
    this.manifests.filter = filterValue.trim().toLowerCase();
  }

  public updateManifest(manifest: Manifest) {
    const dialogRef = this.dialog.open(ManifestsUpdateComponent, { data: { manifest: manifest, manufacture: this.manufacture }});
    dialogRef.afterClosed().subscribe(() => {
      this.service.index(this.manufacture).subscribe(response => {
        this.rebuildTable(response.manifests);
      });
    });
  }
}
