import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoicesItemComponent } from './project-choices-item.component';

describe('ProjectChoicesItemComponent', () => {
  let component: ProjectChoicesItemComponent;
  let fixture: ComponentFixture<ProjectChoicesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChoicesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChoicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
