import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjChoicesListComponent } from './projChoices-list.component';

describe('ProjChoicesListComponent', () => {
  let component: ProjChoicesListComponent;
  let fixture: ComponentFixture<ProjChoicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjChoicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjChoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
