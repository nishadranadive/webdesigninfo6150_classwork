import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitCompComponent } from './emit-comp.component';

describe('EmitCompComponent', () => {
  let component: EmitCompComponent;
  let fixture: ComponentFixture<EmitCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
