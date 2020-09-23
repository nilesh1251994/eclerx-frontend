import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsPersonRegisteredComponent } from './is-person-registered.component';

describe('IsPersonRegisteredComponent', () => {
  let component: IsPersonRegisteredComponent;
  let fixture: ComponentFixture<IsPersonRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsPersonRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsPersonRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
