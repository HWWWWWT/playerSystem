import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  @Input() nav: Object;
  constructor() { }

  ngOnInit() {}
}
