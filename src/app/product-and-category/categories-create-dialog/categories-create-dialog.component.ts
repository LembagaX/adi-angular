import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/request/category';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categories-create-dialog',
  templateUrl: './categories-create-dialog.component.html',
  styleUrls: ['./categories-create-dialog.component.scss']
})
export class CategoriesDialogComponent implements OnInit {

  protected category: Category;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { category: Category }
  ) {}

  ngOnInit() {
    this.category = this.data.category;
  }

}
