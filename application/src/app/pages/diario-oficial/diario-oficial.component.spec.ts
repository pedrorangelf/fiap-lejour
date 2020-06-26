import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioOficialComponent } from './diario-oficial.component';

describe('DiarioOficialComponent', () => {
  let component: DiarioOficialComponent;
  let fixture: ComponentFixture<DiarioOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
