import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsCarAvailableComponent } from './is-car-available.component';

describe('IsCarAvailableComponent', () => {
  let component: IsCarAvailableComponent;
  let fixture: ComponentFixture<IsCarAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsCarAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsCarAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
