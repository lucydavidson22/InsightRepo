import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPaperEditComponent } from './pubPaper-edit.component';

describe('PubPaperEditComponent', () => {
  let component: PubPaperEditComponent;
  let fixture: ComponentFixture<PubPaperEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubPaperEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPaperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
