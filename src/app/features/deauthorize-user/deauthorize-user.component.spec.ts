import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeauthorizeUserComponent } from './deauthorize-user.component';

describe('DeauthorizeUserComponent', () => {
  let component: DeauthorizeUserComponent;
  let fixture: ComponentFixture<DeauthorizeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeauthorizeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeauthorizeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
