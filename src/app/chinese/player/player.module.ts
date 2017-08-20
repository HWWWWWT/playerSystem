import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared/shared.module';
import {PlayerComponent} from './player.component';
import {playerRoutes} from './player.routes';
import {AddplayService} from '../../service/addplay.service';
import {birthdayPipe} from './birthday.pipe';
import {RouterModule} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/src/release/message/nz-message.service';
import { PlayerdetailComponent } from './playerdetail/playerdetail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(playerRoutes)
  ],
  declarations: [ PlayerComponent, birthdayPipe, PlayerdetailComponent],
  providers: [AddplayService, NzMessageService]
})
export class PlayerModule { }
