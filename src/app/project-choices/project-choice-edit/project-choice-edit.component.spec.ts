import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoiceEditComponent } from './project-choice-edit.component';

describe('ProjectChoiceEditComponent', () => {
  let component: ProjectChoiceEditComponent;
  let fixture: ComponentFixture<ProjectChoiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChoiceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChoiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
