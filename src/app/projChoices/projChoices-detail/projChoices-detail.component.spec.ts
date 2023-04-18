import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjChoicesDetailComponent } from './projChoices-detail.component';

describe('ProjChoicesDetailComponent', () => {
  let component: ProjChoicesDetailComponent;
  let fixture: ComponentFixture<ProjChoicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjChoicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjChoicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
