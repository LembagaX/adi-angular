import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { GuestGuard } from './guest.guard';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './auth/users/users.component';
import { OrderComponent } from './auth/order/order.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
