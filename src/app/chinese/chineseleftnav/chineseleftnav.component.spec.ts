import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseleftnavComponent } from './chineseleftnav.component';

describe('ChineseleftnavComponent', () => {
  let component: ChineseleftnavComponent;
  let fixture: ComponentFixture<ChineseleftnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseleftnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseleftnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
