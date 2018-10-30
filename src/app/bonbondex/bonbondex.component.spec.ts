import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbondexComponent } from './bonbondex.component';

describe('BonbondexComponent', () => {
  let component: BonbondexComponent;
  let fixture: ComponentFixture<BonbondexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbondexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbondexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
