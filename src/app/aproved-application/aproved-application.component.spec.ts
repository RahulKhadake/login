import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedApplicationComponent } from './aproved-application.component';

describe('AprovedApplicationComponent', () => {
  let component: AprovedApplicationComponent;
  let fixture: ComponentFixture<AprovedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprovedApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
