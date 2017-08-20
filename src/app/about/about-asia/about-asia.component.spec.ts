import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAsiaComponent } from './about-asia.component';

describe('AboutAsiaComponent', () => {
  let component: AboutAsiaComponent;
  let fixture: ComponentFixture<AboutAsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
