import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { GuestGuard } from './guest.guard';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './auth/users/users.component';
import { OrderComponent } from './auth/order/order.component';
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

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'materials', component: MaterialsComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/purchasing', component: MaterialPurchasingComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/depreciations', component: MaterialDepreciationComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/:slug/analytics', component: MaterialDetailComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'materials/:slug/depreciations', component: MaterialDepreciationAnalyticsComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'manufactures', component: ManufacturesComponent, canActivate: [AuthGuard, WarehouseGuard] },
  { path: 'manufactures/create', component: ManufacturesCreateComponent, canActivate: [AuthGuard, WarehouseGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
