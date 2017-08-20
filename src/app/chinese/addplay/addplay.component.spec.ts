import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplayComponent } from './addplay.component';

describe('AddplayComponent', () => {
  let component: AddplayComponent;
  let fixture: ComponentFixture<AddplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
