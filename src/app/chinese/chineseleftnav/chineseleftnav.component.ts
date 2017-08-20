import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-chineseleftnav',
  templateUrl: './chineseleftnav.component.html',
  styleUrls: ['./chineseleftnav.component.css']
})
export class ChineseleftnavComponent implements OnInit,OnChanges {
  @Input() nav: Object;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(1)
  }

}
