import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjChoicesItemComponent } from './projChoices-item.component';

describe('ProjChoicesItemComponent', () => {
  let component: ProjChoicesItemComponent;
  let fixture: ComponentFixture<ProjChoicesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjChoicesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjChoicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
