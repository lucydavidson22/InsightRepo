import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPapersListComponent } from './pubPapers-list.component';

describe('PubPapersListComponent', () => {
  let component: PubPapersListComponent;
  let fixture: ComponentFixture<PubPapersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubPapersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPapersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
