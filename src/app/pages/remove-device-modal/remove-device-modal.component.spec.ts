import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDeviceModalComponent } from './remove-device-modal.component';

describe('RemoveDeviceModalComponent', () => {
  let component: RemoveDeviceModalComponent;
  let fixture: ComponentFixture<RemoveDeviceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDeviceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDeviceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
