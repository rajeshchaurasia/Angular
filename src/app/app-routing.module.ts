import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { AuthGuard } from './_helpers/auth.guard';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [

 { path: 'chart', component: ChartComponent },
 { path: 'users', component: UsersComponent },

 { path: 'login', component: LoginComponent },
 // { path: 'login', loadChildren: () => import('./login/login.component') },
 { path: 'register', component: RegisterComponent },
 { path: 'data-sharing', component: ParentComponent },
 { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  { path: 'data-binding', component: DataBindingComponent },

 { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) } ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
