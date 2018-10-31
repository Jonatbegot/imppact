import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadresseComponent } from './addadresse.component';

describe('AddadresseComponent', () => {
  let component: AddadresseComponent;
  let fixture: ComponentFixture<AddadresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
