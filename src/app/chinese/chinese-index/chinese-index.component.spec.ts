import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseIndexComponent } from './chinese-index.component';

describe('ChineseIndexComponent', () => {
  let component: ChineseIndexComponent;
  let fixture: ComponentFixture<ChineseIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
