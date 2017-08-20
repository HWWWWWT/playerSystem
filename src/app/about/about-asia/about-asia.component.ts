import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-asia',
  templateUrl: './about-asia.component.html',
  styleUrls: ['./about-asia.component.css']
})
export class AboutAsiaComponent implements OnInit {
  public pageinfo= {
    title: '关于亚洲杯功能',
    eng: 'Function Of FIBA Asia Cup',
    content: ['主要介绍亚洲杯的赛事解构，中国队主要对手的实力情况，以及赛果，这块不是重点，不需要做笔记']
  }
  constructor() { }

  ngOnInit() {
  }

}
