import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {playerModel} from '../../../shared/model/player.modle';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AddplayService} from '../../../service/addplay.service';
import {NzMessageService} from "ng-zorro-antd/src/release/message/nz-message.service";

@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})
export class PlayerdetailComponent implements OnInit, OnChanges {
  public detail: playerModel;
  public id: string;
  public copyform = { };
  public isEdited= false;
  detailForm: FormGroup;
  constructor(
    private fb: FormBuilder ,
    private _act: ActivatedRoute,
    private playerSer: AddplayService,
    private route: Router,
    private messageService: NzMessageService) {}

  ngOnInit() {
    this._act.data.subscribe(data=> {
      this.detail = data.detail;
    })
    this.createForm();
    this.copyform = this.detailForm.value;
    console.log(this.copyform);
  }
  ngOnChanges(){
    console.log('iaminchange')
    this.detailForm.patchValue({
      playName: this.detail.playName,
      age: this.detail.age,
      birthDay: this.detail.birthDay,
      height: this.detail.height,
      weight: this.detail.weight,
      status: this.detail.status,
      sex: this.detail.sex,
      comment: this.detail.comment
    })
  }
  createForm() {
    this.detailForm = this.fb.group({
      playName: [this.detail.playName, [Validators.required]],
      age: [this.detail.age, [Validators.required]],
      birthDay: [ this.detail.birthDay, [ this.birthDayValidator ] ],
      height: [this.detail.height],
      weight: [this.detail.weight],
      status: [this.detail.status, [ Validators.required]],
      sex: [this.detail.sex, [ Validators.required]],
      comment: [this.detail.comment, [ Validators.required]]
    })
  }
  birthDayValidator = (control: FormControl) => {
    if (new Date(control.value) > new Date()) {
      return { expired: true, error: true };
    }
  }
  getFormControl(name) {
    return this.detailForm.controls[ name ];
  }
  update(value) {
    this.isEdited= true;
    this.id = this.detail.id;
    value.id = this.id;
    const newValue = value;
    this.playerSer.updatePlayer(newValue).subscribe((res: any) =>{
      const body = res.json();
      if(body.success) {
        // this.route.navigate(['/workspace/chinese/player']);
        this.messageService.success('save success')
      }

    })

  }
  isObjectValueEqual(a, b) {
    const getValue = (obj) => {
      const objValue = []
      for(const i in obj){
        objValue.push(obj[i]);
      }
      return objValue;
    }
    const aProps = getValue(a);
    const bProps = getValue(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }
    for (let i = 0; i < aProps.length; i++) {
      if ( aProps[i] !== bProps[i]) {
        return false;
      }
    }
    return true;
  }
  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged

    const detailnow = this.detailForm.value;
    console.log(this.copyform)
    console.log(detailnow);
    console.log(this.isObjectValueEqual(this.copyform, detailnow));
    if (this.isObjectValueEqual(this.copyform, detailnow)) {
      this.copyform = detailnow;
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return confirm('Discard changes?');
  }
  resetForm(){
   this.ngOnChanges();
  }
}
