import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedLoginsPageComponent } from './failed-logins-page.component';

describe('FailedLoginsPageComponent', () => {
  let component: FailedLoginsPageComponent;
  let fixture: ComponentFixture<FailedLoginsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedLoginsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedLoginsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
