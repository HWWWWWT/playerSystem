import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login.routes';
import {LoginComponent} from './login.component';
import {RegisterComponent} from '../register/register.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from '../service/register.service';
import {HttpModule} from '@angular/http';
import {LoginService} from "../service/login.service";
import {UserService} from "../service/user.service";
import {CookieService} from "angular2-cookie/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [RegisterService, LoginService, UserService, CookieService]

})
export class LoginModule { }
