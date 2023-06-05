import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileComponent } from './dashboard-profile.component';

describe('DashboardProfileComponent', () => {
  let component: DashboardProfileComponent;
  let fixture: ComponentFixture<DashboardProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProfileComponent]
    });
    fixture = TestBed.createComponent(DashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
