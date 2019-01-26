import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { GuestGuard } from './guest.guard';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './auth/users/users.component';
import { OrderComponent } from './auth/order/order.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { MaterialsComponent } from './Auth/materials/materials.component';
import { MaterialDetailComponent } from './warehouse/material-detail/material-detail.component';
import { MaterialPurchasingComponent } from './warehouse/material-purchasing/material-purchasing.component';
import { MaterialDepreciationComponent } from './warehouse/material-depreciation/material-depreciation.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'materials', component: MaterialsComponent, canActivate: [AuthGuard] },
  { path: 'materials/purchasing', component: MaterialPurchasingComponent, canActivate: [AuthGuard] },
  { path: 'materials/:slug/analytics', component: MaterialDetailComponent, canActivate: [AuthGuard] },
  { path: 'materials/depreciations', component: MaterialDepreciationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
