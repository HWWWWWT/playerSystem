import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output()  toLogin = new EventEmitter()
  login= true;
  register= false;
  registerForm: FormGroup;
  constructor( private fb: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [ null, [ Validators.email ] ],
      regPassword: [ null, [ Validators.required , Validators.minLength(8)] ],
      checkPassword : [ null, [ Validators.required, this.confirmationValidator ] ],
      agree : [ false ]
    });
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls[ 'regPassword' ].value) {
      return { confirm: true, error: true };
    }
  }
  getFormControl(name) {
    return this.registerForm.controls[ name ];
  }
  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.registerForm.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }
  _registerForm() {
    if (this.registerForm.status === 'INVALID') {
      for (const i in this.registerForm.controls) {
        this.registerForm.controls[ i ].markAsDirty();
      }
    }else {
      this.registerService.addUser(this.registerForm.value)
        .subscribe((res: any) => {
          console.log('res+++++:' + res);
          const body = res.json();
          console.log('body+++++:' + body.success);
          if (body.success) {

            alert('注册成功');
            this.toLoginArea();
          } else {
            alert(body.message);
          }
        })
    }
  }
  toLoginArea() {
    this.toLogin.emit([this.login, this.register]);
  }
}
