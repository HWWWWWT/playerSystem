import {Component,OnInit} from '@angular/core';
import {playerModel} from '../../shared/model/player.modle';
import {AddplayService} from '../../service/addplay.service';
import {NzMessageService} from 'ng-zorro-antd/src/release/message/nz-message.service';
import {show} from '../../shared/pipe';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [show]
})
export class PlayerComponent implements OnInit{
  public playerinfo: playerModel[] = [];
  _dataSet = [];
  public selectplayer: playerModel[] = [];
  public show = true;
  constructor( private playerService: AddplayService , private msgService: NzMessageService) { }

  ngOnInit() {
    this.playerService.getPlayName()
      .subscribe((res: any) => {
      console.log(res)
        this.playerinfo = res;
        });

  }
  showDetail(id: string) {
    this.show = !this.show;
    this.playerService.getPlayById(id).subscribe((res: any)=>{
      this.selectplayer = res;
      console.log(this.selectplayer)
    } )

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
  updatePlayer(value){
    this.playerService.updatePlayer(value).subscribe((res: any) =>{
      if(res.success){
        alert('successssssssssssss')
      }

    })
  }
}
