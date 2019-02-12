import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { GuestGuard } from './guest.guard';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './auth/users/users.component';
import { WarehouseGuard } from './warehouse-guard.guard';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { MaterialsComponent } from './Auth/materials/materials.component';
import { MaterialDetailComponent } from './warehouse/material-detail/material-detail.component';
import { MaterialPurchasingComponent } from './warehouse/material-purchasing/material-purchasing.component';
import { MaterialDepreciationComponent } from './warehouse/material-depreciation/material-depreciation.component';
import {
  MaterialDepreciationAnalyticsComponent
} from './warehouse/material-depreciation-analytics/material-depreciation-analytics.component';
import { ManufacturesComponent } from './warehouse/manufactures/manufactures.component';
import { ManufacturesCreateComponent } from './warehouse/manufactures-create/manufactures-create.component';
import { ManufacturesShowComponent } from './warehouse/manufactures-show/manufactures-show.component';
import { ProductsComponent } from './product-and-category/products/products.component';
import { ProductsCreateComponent } from './product-and-category/products-create/products-create.component';
import { CategoriesComponent } from './product-and-category/categories/categories.component';
import { ProductsShowComponent } from './product-and-category/products-show/products-show.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrdersCreateComponent } from './admin/orders-create/orders-create.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'orders/create', component: OrdersCreateComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'materials', component: MaterialsComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/purchasing', component: MaterialPurchasingComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/depreciations', component: MaterialDepreciationComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/:slug/analytics', component: MaterialDetailComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/:slug/depreciations', component: MaterialDepreciationAnalyticsComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'manufactures', component: ManufacturesComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'manufactures/create', component: ManufacturesCreateComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'manufactures/:code/manifests', component: ManufacturesShowComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: ProductsCreateComponent, canActivate: [AuthGuard] },
  { path: 'products/:code', component: ProductsShowComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
