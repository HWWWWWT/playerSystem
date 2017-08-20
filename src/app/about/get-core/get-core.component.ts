import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-core',
  templateUrl: './get-core.component.html',
  styleUrls: ['./get-core.component.css']
})
export class GetCoreComponent implements OnInit {
  public pageinfo= {
    title: '源码地址',
    eng: 'Core Address',
    content: ['GitHub地址，等功能做好了再放出来，先不献丑了']
  }
  constructor() { }

  ngOnInit() {
  }

}
