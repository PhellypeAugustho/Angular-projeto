import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostoreAppComponent } from './boostore-app.component';

describe('BoostoreAppComponent', () => {
  let component: BoostoreAppComponent;
  let fixture: ComponentFixture<BoostoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
