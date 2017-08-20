import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
const appRoutes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'workspace', loadChildren: './workspace/workspace.module#WorkspaceModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
