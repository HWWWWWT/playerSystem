import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChineseComponent } from './chinese.component';
import {ChineseRoutingModule} from './chinese.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared/shared.module';
import { ChineseIndexComponent } from './chinese-index/chinese-index.component';
import {AddplayService} from '../service/addplay.service';
import { ChineseleftnavComponent } from './chineseleftnav/chineseleftnav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ChineseRoutingModule
  ],
  declarations: [ChineseComponent, ChineseIndexComponent, ChineseleftnavComponent],
  providers: [AddplayService]
})
export class ChineseModule { }
