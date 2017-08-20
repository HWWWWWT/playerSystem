import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import {workspaceRoutingModule} from './workspace.routes';
import {CanActivateGuard} from '../service/activate.service';
import {TopnavComponent} from '../topnav/topnav.component';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    workspaceRoutingModule
  ],
  declarations: [WorkspaceComponent, TopnavComponent ],
  providers: [CanActivateGuard]
})
export class WorkspaceModule { }
