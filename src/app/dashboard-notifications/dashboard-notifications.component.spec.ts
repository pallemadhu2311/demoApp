import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotificationsComponent } from './dashboard-notifications.component';

describe('DashboardNotificationsComponent', () => {
  let component: DashboardNotificationsComponent;
  let fixture: ComponentFixture<DashboardNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardNotificationsComponent]
    });
    fixture = TestBed.createComponent(DashboardNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
