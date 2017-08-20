import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {AddplayService} from '../../service/addplay.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addplay',
  templateUrl: './addplay.component.html',
  styleUrls: ['./addplay.component.css']
})
export class AddplayComponent implements OnInit {
  height = '';
  addplayForm: FormGroup;
  constructor(private fb: FormBuilder, private addplayService: AddplayService, private playerRoute: Router) {}

  ngOnInit() {
    this.addplayForm = this.fb.group({
      playName            : [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      // email               : [ '', [ this.emailValidator ] ],
      age                 : [ '', [ Validators.required]],
      birthDay            : [ '', [ this.birthDayValidator ] ],
      height              : [ ''],
      weight              : [ ''],
      status              : [ '', [ Validators.required]],
      sex                 : [ '', [ Validators.required]],
      comment             : [ '', [ Validators.required]]
    });
  }
  submitForm = ($event, value) => {
    // for (const key in this.addplayForm.controls) {
    //   this.addplayForm.controls[ key ].markAsDirty();
    // }
    console.log(value);
    this.addplayService.addPlayer(value).subscribe((res: any) => {
      console.log('res+++++:' + res);
      const body = res.json();
      console.log('body+++++:' + body.success);
      if (body.success) {

        alert('添加成功');
        this.addplayForm.reset();
        for (const key in this.addplayForm.controls) {
          this.addplayForm.controls[ key ].markAsPristine();
        }
        // this.playerRoute.navigateByUrl('/workspace/chinese');
      } else {
        alert(body.message);
      }
    })
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.addplayForm.reset();
    for (const key in this.addplayForm.controls) {
      this.addplayForm.controls[ key ].markAsPristine();
    }
  }

  // validateConfirmPassword() {
  //   setTimeout(_ => {
  //     this.addplayForm.controls[ 'passwordConfirmation' ].updateValueAndValidity();
  //   })
  // }

  userNameAsyncValidator = (control: FormControl): any => {
    return Observable.create(function (observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  };

  getFormControl(name) {
    return this.addplayForm.controls[ name ];
  }

  // emailValidator = (control: FormControl): { [s: string]: boolean } => {
  //   const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  //   if (!control.value) {
  //     return { required: true }
  //   } else if (!EMAIL_REGEXP.test(control.value)) {
  //     return { error: true, email: true };
  //   }
  // };
  // passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { required: true };
  //   } else if (control.value !== this.addplayForm.controls[ 'password' ].value) {
  //     return { confirm: true, error: true };
  //   }
  // };
  birthDayValidator = (control: FormControl): any => {
    if (new Date(control.value) > new Date()) {
      return { expired: true, error: true };
    }
  };
  changAge(value) {
    console.log(value);
   this.height = value;

  }


}
