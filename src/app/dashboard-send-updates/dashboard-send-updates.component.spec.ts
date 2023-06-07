import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSendUpdatesComponent } from './dashboard-send-updates.component';

describe('DashboardSendUpdatesComponent', () => {
  let component: DashboardSendUpdatesComponent;
  let fixture: ComponentFixture<DashboardSendUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSendUpdatesComponent]
    });
    fixture = TestBed.createComponent(DashboardSendUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
