import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese-index',
  templateUrl: './chinese-index.component.html',
  styleUrls: ['./chinese-index.component.css']
})
export class ChineseIndexComponent implements OnInit {
  public pageinfo= {
    title: '概述',
    eng: 'summary',
    content: ['这个页面包括了常见得数据操作，包括添加新成员，根据id浏览成员信息，修改并保存成员信息']
  }
  constructor() { }

  ngOnInit() {
  }

}
