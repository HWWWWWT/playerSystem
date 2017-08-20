import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChineseComponent } from './about-chinese.component';

describe('AboutChineseComponent', () => {
  let component: AboutChineseComponent;
  let fixture: ComponentFixture<AboutChineseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutChineseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
