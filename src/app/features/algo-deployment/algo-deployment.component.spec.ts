import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoDeploymentComponent } from './algo-deployment.component';

describe('AlgoDeploymentComponent', () => {
  let component: AlgoDeploymentComponent;
  let fixture: ComponentFixture<AlgoDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoDeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
