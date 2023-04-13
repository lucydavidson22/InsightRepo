import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoicesDetailComponent } from './project-choices-detail.component';

describe('ProjectChoicesDetailComponent', () => {
  let component: ProjectChoicesDetailComponent;
  let fixture: ComponentFixture<ProjectChoicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChoicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChoicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
