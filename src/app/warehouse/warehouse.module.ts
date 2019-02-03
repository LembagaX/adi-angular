import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from '../app-routing.module';
import { PartialsModule } from '../partials/partials.module';
import { MaterialModule } from '../material/material.module';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialPurchasingComponent } from './material-purchasing/material-purchasing.component';
import { MaterialDepreciationComponent } from './material-depreciation/material-depreciation.component';
import { MaterialShowCardComponent } from './material-show-card/material-show-card.component';
import { MaterialEditCardComponent } from './material-edit-card/material-edit-card.component';
import { MaterialRecordedPriceComponent } from './material-recorded-price/material-recorded-price.component';
import { MaterialDepreciationAnalyticsComponent } from './material-depreciation-analytics/material-depreciation-analytics.component';
import { MaterialDepreciationGraphComponent } from './material-depreciation-graph/material-depreciation-graph.component';
import { MaterialBoughtFromComponent } from './material-bought-from/material-bought-from.component';
import { ManufacturesComponent } from './manufactures/manufactures.component';
import { ManufacturesTableComponent } from './manufactures-table/manufactures-table.component';
import { ManufacturesCreateComponent } from './manufactures-create/manufactures-create.component';
import { ManufacturesFormComponent } from './manufactures-form/manufactures-form.component';
import { ManufacturesProductsComponent } from './manufactures-products/manufactures-products.component';
import { ProductsComponent } from './products/products.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AttachProductComponent } from './attach-product/attach-product.component';
import { ManifestCreateComponent } from './manifest-create/manifest-create.component';
import { ManufacturesShowComponent } from './manufactures-show/manufactures-show.component';
import { ManifestsTableComponent } from './manifests-table/manifests-table.component';

@NgModule({
  declarations: [
    MaterialPurchasingComponent,
    MaterialDetailComponent,
    MaterialDepreciationComponent,
    MaterialShowCardComponent,
    MaterialEditCardComponent,
    MaterialRecordedPriceComponent,
    MaterialDepreciationAnalyticsComponent,
    MaterialDepreciationGraphComponent,
    MaterialBoughtFromComponent,
    ManufacturesComponent,
    ManufacturesTableComponent,
    ManufacturesCreateComponent,
    ManufacturesFormComponent,
    ManufacturesProductsComponent,
    ProductsComponent,
    ProductsTableComponent,
    AttachProductComponent,
    ManifestCreateComponent,
    ManufacturesShowComponent,
    ManifestsTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatProgressButtonsModule,
    ChartModule,
  ],
  entryComponents: [
    AttachProductComponent,
    ManifestCreateComponent
  ]
})
export class WarehouseModule { }
