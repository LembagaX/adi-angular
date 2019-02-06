import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Category } from 'src/app/response/category';
import { CategoriesCreateDialogComponent } from '../categories-create-dialog/categories-create-dialog.component';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  protected loading: boolean;
  protected headers: string[];
  protected categories: MatTableDataSource<Category>;

  constructor(
    private service: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loading = true;
    this.fetchCategories();
  }


  private fetchCategories() {
    this.service.index().subscribe((response => {
      this.buildTable(response);
      this.loading = false;
    }));
  }

  private buildTable(response: Category[]) {
    this.headers = ['id', 'name', 'products', 'created_at', 'updated_at'];
    this.categories = new MatTableDataSource<Category>(response);
    this.categories.sort = this.sort;
    this.categories.paginator = this.paginator;
  }

  public loadForm() {
    const dialogRef = this.dialog.open(CategoriesCreateDialogComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe(() => {
      this.refetchCategories();
    });
  }

  private refetchCategories() {
    this.loading = true;
    this.fetchCategories();
    this.loading = false;
  }
}
