import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PartialsModule } from '../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsComponent } from './products/products.component';
import { WarehouseModule } from '../warehouse/warehouse.module';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { ProductsCreateDialogComponent } from './products-create-dialog/products-create-dialog.component';
import { ProductsShowComponent } from './products-show/products-show.component';
import { ProductsInfoComponent } from './products-info/products-info.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsCreateComponent,
    ProductsFormComponent,
    ProductsEditComponent,
    CategoriesComponent,
    CategoriesTableComponent,
    CategoriesFormComponent,
    CategoriesDialogComponent,
    ProductsCreateDialogComponent,
    ProductsShowComponent,
    ProductsInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    WarehouseModule
  ],
  entryComponents: [
    ProductsEditComponent,
    CategoriesDialogComponent,
    ProductsCreateDialogComponent
  ]
})
export class ProductAndCategoryModule { }
