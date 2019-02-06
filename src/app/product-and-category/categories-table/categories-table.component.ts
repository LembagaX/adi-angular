import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Category } from 'src/app/response/category';
import { CategoriesDialogComponent } from '../categories-create-dialog/categories-create-dialog.component';
import { LoadingPopupComponent } from 'src/app/partials/loading-popup/loading-popup.component';

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
    private dialog: MatDialog,
    private snackbar: MatSnackBar
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
    const dialogRef = this.dialog.open(CategoriesDialogComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe(() => {
      this.refetchCategories();
    });
  }

  public edit(category: Category) {
    const dialogRef = this.dialog.open(CategoriesDialogComponent, { width: '500px', data: { category: category }});
    dialogRef.afterClosed().subscribe(() => {
      this.refetchCategories();
    });
  }

  public destroy(category: Category) {
    this.dialog.open(LoadingPopupComponent, { data: 'Destroying Categories' });
    this.service.destroy(category).subscribe(() => {
      this.dialog.closeAll();
      this.refetchCategories();
      this.snackbar.open('Category Destroyed', 'close', { duration: 2000 });
    });
  }

  private refetchCategories() {
    this.loading = true;
    this.fetchCategories();
    this.loading = false;
  }
}
