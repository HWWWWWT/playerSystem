import {Component, OnChanges, OnInit} from '@angular/core';
import {AddplayService} from "../service/addplay.service";
import {playerModel} from "../shared/model/player.modle"
@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit , OnChanges{
  public navInfo = [
    {
      id: '1',
      title: '概述',
      icon: 'anticon-mail',
      children: [
        { name: '关于中国队', route: '/workspace/chinese'}
      ]
    },
    {
      id: '2',
      title: '中国队',
      icon: 'anticon-setting',
      children: [
        { name: '所有成员', route: '/workspace/chinese/player'}
      ]
    },
    {
      id: '3',
      title: '新添加成员',
      icon: 'anticon-appstore',
      children: [
        { name: '添加新成员', route: '/workspace/chinese/addplayer'}
      ]
    }
  ];
  public player:any;

  constructor(private _player: AddplayService) { }

  ngOnInit() {
    // this._player.getPlayName()
    //   .subscribe((res: any)=>{
    //     // this.player = res;
    //     // console.log(res)
    //     for(const key in res){
    //       // this.navInfo[1].children.push({name: res[key].playname, route: `/workspace/chinese/player/${res[key].id}`});
    //       this.player = {name: res[key].playname, route: `/workspace/chinese/${res[key].id}`};
    //       this.navInfo[1].children.splice(0,0,this.player);
    //     }
    //   })

  }
  ngOnChanges(){
    // this._player.getPlayName()
    //   .subscribe((res: any)=>{
    //     // this.player = res;
    //     console.log(res)
    //     for(const key in res){
    //       this.navInfo[1].children.push({name: res[key].playname, route: `/workspace/chinese/player/${res[key].id}`});
    //       console.log(res[key].id);
    //     }
    //   })
  }
}
