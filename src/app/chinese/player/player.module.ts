import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared/shared.module';
import {PlayerComponent} from './player.component';
import {PlayRouting} from './player.routes';
import {AddplayService} from '../../service/addplay.service';
import {birthdayPipe} from './birthday.pipe';
import {NzMessageService} from 'ng-zorro-antd/src/release/message/nz-message.service';
import { PlayerdetailComponent } from './playerdetail/playerdetail.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ResolveGuard} from './resolve.guard';
import {CanDeactivateGuard} from './candeactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlayRouting
  ],
  declarations: [ PlayerComponent, birthdayPipe, PlayerdetailComponent, PlayerListComponent],
  providers: [AddplayService, NzMessageService, ResolveGuard, CanDeactivateGuard]
})
export class PlayerModule { }
