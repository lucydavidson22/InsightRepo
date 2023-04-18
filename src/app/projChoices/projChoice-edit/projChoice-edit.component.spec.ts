import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjChoiceEditComponent } from './projChoice-edit.component';

describe('ProjChoiceEditComponent', () => {
  let component: ProjChoiceEditComponent;
  let fixture: ComponentFixture<ProjChoiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjChoiceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjChoiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
