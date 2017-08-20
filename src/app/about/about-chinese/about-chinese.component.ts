import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-chinese',
  templateUrl: './about-chinese.component.html',
  styleUrls: ['./about-chinese.component.css']
})
export class AboutChineseComponent implements OnInit {
  public pageinfo= {
    title: '关于中国队功能',
    eng: 'Function Of Chinese Basketball Team',
    content: ['主要介绍中国队成员的综合能力', '还可以动态的添加中国队员的基本信息，增删查改。']
  }
  constructor() { }

  ngOnInit() {
  }

}
