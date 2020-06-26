import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProclamasComponent } from './proclamas.component';

describe('ProclamasComponent', () => {
  let component: ProclamasComponent;
  let fixture: ComponentFixture<ProclamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProclamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProclamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
