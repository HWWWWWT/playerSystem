import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkspaceComponent} from './workspace.component';
import {AuthGuard} from '../service/auth-guard.service';

const workspaceRoutes: Routes = [
  { path: '' , component: WorkspaceComponent,
  children: [
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    { path: 'chinese', loadChildren: '../chinese/chinese.module#ChineseModule'},
    { path: 'asia', loadChildren: '../asia/Asia.module#AsiaModule'},
    { path: 'about', loadChildren: '../about/about.module#AboutModule'}
  ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(workspaceRoutes)],
  exports: [RouterModule]
})

export class workspaceRoutingModule {}
