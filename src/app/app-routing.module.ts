import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'user-mgmt',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
