import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutdataComponent } from './layoutdata.component';

describe('LayoutdataComponent', () => {
  let component: LayoutdataComponent;
  let fixture: ComponentFixture<LayoutdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
