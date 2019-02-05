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

@NgModule({
  declarations: [ProductsComponent, ProductsCreateComponent, ProductsFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    WarehouseModule
  ]
})
export class ProductAndCategoryModule { }
