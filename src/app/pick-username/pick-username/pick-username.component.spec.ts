import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUsernameComponent } from './pick-username.component';

describe('PickUsernameComponent', () => {
  let component: PickUsernameComponent;
  let fixture: ComponentFixture<PickUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
