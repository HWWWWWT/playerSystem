import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoreComponent } from './get-core.component';

describe('GetCoreComponent', () => {
  let component: GetCoreComponent;
  let fixture: ComponentFixture<GetCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
