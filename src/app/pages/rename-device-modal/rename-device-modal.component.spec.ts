import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDeviceModalComponent } from './rename-device-modal.component';

describe('RenameDeviceModalComponent', () => {
  let component: RenameDeviceModalComponent;
  let fixture: ComponentFixture<RenameDeviceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenameDeviceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameDeviceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
