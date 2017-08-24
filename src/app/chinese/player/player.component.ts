import {Component, OnInit} from '@angular/core';
import {show} from '../../shared/pipe';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [show]
})
export class PlayerComponent implements OnInit{
  public show= true;
  constructor( ) { }

  ngOnInit() {

  }


}
