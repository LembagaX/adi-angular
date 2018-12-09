import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { AuthMiddlewareService } from './auth-middleware.service';
import { GuestMiddlewareService } from './guest-middleware.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestMiddlewareService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthMiddlewareService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
