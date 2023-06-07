import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersReportsComponent } from './dashboard-users-reports.component';

describe('DashboardUsersReportsComponent', () => {
  let component: DashboardUsersReportsComponent;
  let fixture: ComponentFixture<DashboardUsersReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUsersReportsComponent]
    });
    fixture = TestBed.createComponent(DashboardUsersReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
