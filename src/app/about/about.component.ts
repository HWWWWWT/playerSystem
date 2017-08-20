import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public navInfo = [
    {
      id: '1',
      title: '概述',
      icon: 'anticon-mail',
      children: [
        { name: '概述', route: '/workspace/about'}
      ]
    },
    {
      id: '2',
      title: '如何使用？',
      icon: 'anticon-setting',
      children: [
        { name: '关于中国队功能', route: '/workspace/about/chinese' },
        { name: '关于亚洲杯功能', route: '/workspace/about/asia' }
      ]
    },
    {
      id: '3',
      title: '如何获取这个DEMO项目源码',
      icon: 'anticon-github',
      children: [
        { name: '交流群', route: '/workspace/about' },
        { name: 'GitHub地址', route: '/workspace/about/getcore' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
