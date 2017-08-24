import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChineseComponent } from './chinese.component';
import {ChineseRoutingModule} from './chinese.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared/shared.module';
import { ChineseIndexComponent } from './chinese-index/chinese-index.component';
import {AddplayService} from '../service/addplay.service';
import { ChineseleftnavComponent } from './chineseleftnav/chineseleftnav.component';
import {UserService} from "../service/user.service";
import {AuthGuard} from "../service/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ChineseRoutingModule
  ],
  declarations: [ChineseComponent, ChineseIndexComponent, ChineseleftnavComponent],
  providers: [AddplayService, UserService, AuthGuard]
})
export class ChineseModule { }
