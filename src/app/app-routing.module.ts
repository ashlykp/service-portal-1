
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

import { UserManagementComponent } from './features/user-management/user-management.component';
import {AlgoDeploymentComponent} from './features/algo-deployment/algo-deployment.component'
const routes: Routes = [
 { path : 'login', component: LoginComponent },
  {path: 'user-management', component: UserManagementComponent},
  {path: 'algo-deployment', component: AlgoDeploymentComponent},
  
  { path : '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
