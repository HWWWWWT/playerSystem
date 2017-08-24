import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Data, Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {INVALID} from '@angular/forms/src/model';
import {UserService} from '../service/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {UserModel} from "../shared/model/user.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login= true;
  register= false;
  validateForm: FormGroup;
  public userInfo: UserModel;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private  userService: UserService,
    private cookieService: CookieService
  ){ }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [ Validators.required]],
      password: [null, [ Validators.required]],
      remember: [true]
    });
  }
  _loginForm() {
    // this.router.navigateByUrl('workspace');
    if (this.validateForm.status === 'INVALID'){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }else {
      console.log(this.validateForm.value)
      this.loginService.login(this.validateForm.value)
        .subscribe((res: any) => {
        const body = res.json();
        if (body.success) {
          // this.userService.isLogin = true;
          // this.userService.userInfo = { username: this.validateForm.value.userName, createDate: new Date().toLocaleString()}
          // const userInfo: UserModel ={} ;
            this.userInfo = {
              loginDate: new Date,
              loginPsw: this.validateForm.controls['password'].value,
              remPsw: this.validateForm.controls['remember'].value,
              isLogined: true
            }
          const loginName = this.validateForm.controls['userName'].value;
          console.log(this.userInfo);
          this.cookieService.putObject(loginName, this.userInfo );
          this.router.navigateByUrl('workspace');
        }else {
          alert(body.message);
        }
        })
    }

  }

  toRegister() {
    this.login = !this.login;
    this.register = !this.register;
  }

  changeStatus(data) {
    this.login = data[0];
    this.register = data[1];
  }

  pswCom(value){
      console.log(value);
      const hasPsw: any = this.cookieService.getObject(value);
      // console.log(hasPsw.loginPsw)
      if(hasPsw) {
        if(hasPsw.remPsw){
          this.validateForm.patchValue({
            password: hasPsw.loginPsw
          });
        }
      }
  }

}
