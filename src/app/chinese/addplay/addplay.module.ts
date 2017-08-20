import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddplayComponent } from './addplay.component';
import {addplayRoutingModule} from './addplay.routes';
import {SharedModule} from '../../shared/shared/shared.module';
import {AddplayService} from '../../service/addplay.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    addplayRoutingModule
  ],
  declarations: [AddplayComponent],
  providers: [AddplayService]
})
export class AddplayModule { }
