import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftnavComponent} from '../../leftnav/leftnav.component';
import {NgZorroAntdModule} from 'ng-zorro-antd/src/release/ng-zorro-antd.module';
import {PageComponent} from '../../page/page.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [LeftnavComponent, PageComponent],
  exports: [CommonModule, LeftnavComponent, PageComponent, NgZorroAntdModule, RouterModule, HttpModule, ReactiveFormsModule]
})
export class SharedModule { }
