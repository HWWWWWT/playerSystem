import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo = []
  constructor(private _http: UserService) { }

  ngOnInit() {
    this._http.getUser().subscribe((res: any) => {
      const body = res.json();
      this.userInfo = body.data;
      }
    )
  }

}
