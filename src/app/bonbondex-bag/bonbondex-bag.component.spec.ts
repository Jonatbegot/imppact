import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbondexBagComponent } from './bonbondex-bag.component';

describe('BonbondexBagComponent', () => {
  let component: BonbondexBagComponent;
  let fixture: ComponentFixture<BonbondexBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbondexBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbondexBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
