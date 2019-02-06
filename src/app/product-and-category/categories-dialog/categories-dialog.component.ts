import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/request/category';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.scss']
})
export class CategoriesDialogComponent implements OnInit {

  public category: Category;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { category: Category }
  ) {}

  ngOnInit() {
    this.category = this.data.category;
  }

}
