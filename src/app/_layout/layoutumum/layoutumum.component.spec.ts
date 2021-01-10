import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutumumComponent } from './layoutumum.component';

describe('LayoutumumComponent', () => {
  let component: LayoutumumComponent;
  let fixture: ComponentFixture<LayoutumumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutumumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutumumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
