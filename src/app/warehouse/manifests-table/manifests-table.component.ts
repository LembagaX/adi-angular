import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Manufacture } from 'src/app/response/manufacture';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Manifest } from 'src/app/response/manifest';

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

  constructor() { }

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
}
