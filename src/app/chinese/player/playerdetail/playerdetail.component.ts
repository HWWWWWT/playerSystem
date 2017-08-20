import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {playerModel} from '../../../shared/model/player.modle';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})
export class PlayerdetailComponent implements OnInit, OnChanges {
  @Input() detail: playerModel;
  @Output() updatePlay: EventEmitter<any> = new EventEmitter()
  detailForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {


  }
  createForm(){
    this.detailForm = this.fb.group({
      playName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      birthDay: ['', [ this.birthDayValidator ] ],
      height: [''],
      weight: [''],
      status: ['', [ Validators.required]],
      sex: ['', [ Validators.required]],
      comment: ['', [ Validators.required]]
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
  ngOnChanges(){
    console.log(this.detail)
    this.detailForm.reset();
    this.detailForm.patchValue({
      playName:  this.detail.playName,
      age: this.detail.age ,
      birthDay: this.detail.birthDay,
      height: this.detail.height,
      weight: this.detail.weight,
      status: this.detail.status,
      sex: this.detail.sex,
      comment: this.detail.comment,
    })
  }
  resetForm(){
    this.ngOnChanges()
  }

  update(value){
    this.updatePlay.emit(value)
  }
}
