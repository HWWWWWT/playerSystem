import { Component, OnInit } from '@angular/core';
import {AddplayService} from '../../../service/addplay.service';
import {NzMessageService} from 'ng-zorro-antd/src/release/message/nz-message.service';

import {Router} from '@angular/router';
import {playerModel} from '../../../shared/model/player.modle';
import {show} from '../../../shared/pipe';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  animations: [show]
})
export class PlayerListComponent implements OnInit {
  public playerinfo: playerModel[] = [];
  constructor(private playerService: AddplayService , private msgService: NzMessageService, private route: Router) { }

  ngOnInit() {
    this.playerService.getPlayName()
      .subscribe((res: any) => {
        console.log(res)
        this.playerinfo = res;
      });

  }
  showDetail(id: string) {
    this.route.navigate(['/workspace/chinese/player/detail/', id]);
  }
  remove(id: string) {
    console.log(id)
    const f = confirm( 'Sure about that?' );
    if (f) {
      this.playerService.delPlayer(id).subscribe((res: any) => {
        console.log(res)
        const body = res.json();
        console.log(body)
        if (body.success) {
          this.msgService.create('error' , '删除成功')
        }
      });
      this.playerService.getPlayName()
        .subscribe((res: any) => {
          console.log(res)
          this.playerinfo = res;
        });

    }else {
      return false;
    }
  }
}
