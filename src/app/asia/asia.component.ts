import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  public navInfo = [
    {
      id: '1',
      title: '概述',
      icon: 'anticon-mail',
      children: [
        { name: '关于中国队', route: ''}
      ]
    },
    {
      id: '2',
      title: '亚洲杯？',
      icon: 'anticon-setting',
      children: [
        { name: '菲律宾', route: '' },
        { name: '伊朗', route: '' },
        { name: '澳大利亚', route: ''}
      ]
    },
    {
      id: '3',
      title: '赛果',
      icon: 'anticon-appstore',
      children: [
        { name: '赛果', route: '' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
