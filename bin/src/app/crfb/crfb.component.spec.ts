import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrfbComponent } from './crfb.component';

describe('CrfbComponent', () => {
  let component: CrfbComponent;
  let fixture: ComponentFixture<CrfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrfbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
