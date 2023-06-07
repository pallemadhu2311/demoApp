import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComplaintsComponent } from './dashboard-complaints.component';

describe('DashboardComplaintsComponent', () => {
  let component: DashboardComplaintsComponent;
  let fixture: ComponentFixture<DashboardComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComplaintsComponent]
    });
    fixture = TestBed.createComponent(DashboardComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
