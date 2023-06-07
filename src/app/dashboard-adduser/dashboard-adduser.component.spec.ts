import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdduserComponent } from './dashboard-adduser.component';

describe('DashboardAdduserComponent', () => {
  let component: DashboardAdduserComponent;
  let fixture: ComponentFixture<DashboardAdduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdduserComponent]
    });
    fixture = TestBed.createComponent(DashboardAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
