import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsiaComponent } from './asia.component';
import {asiaRoutingModule} from './asia.routes';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    asiaRoutingModule
  ],
  declarations: [AsiaComponent]
})
export class AsiaModule { }
