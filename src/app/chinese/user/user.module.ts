import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {SharedModule} from "../../shared/shared/shared.module";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {UserService} from "../../service/user.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
