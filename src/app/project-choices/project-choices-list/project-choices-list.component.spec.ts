import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoicesListComponent } from './project-choices-list.component';

describe('ProjectChoicesListComponent', () => {
  let component: ProjectChoicesListComponent;
  let fixture: ComponentFixture<ProjectChoicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChoicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
