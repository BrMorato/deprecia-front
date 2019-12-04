import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterbemComponent } from './manterbem.component';

describe('ManterbemComponent', () => {
  let component: ManterbemComponent;
  let fixture: ComponentFixture<ManterbemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterbemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterbemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
