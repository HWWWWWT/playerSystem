import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import {workspaceRoutingModule} from './workspace.routes';
import {CanActivateGuard} from '../service/activate.service';
import {TopnavComponent} from '../topnav/topnav.component';
import {SharedModule} from '../shared/shared/shared.module';
import {AuthGuard} from "../service/auth-guard.service";
import {UserService} from "../service/user.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    workspaceRoutingModule
  ],
  declarations: [WorkspaceComponent, TopnavComponent ],
  providers: [CanActivateGuard, AuthGuard, UserService]
})
export class WorkspaceModule { }
