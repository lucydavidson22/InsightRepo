import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPapersDetailComponent } from './pubPapers-detail.component';

describe('PubPapersDetailComponent', () => {
  let component: PubPapersDetailComponent;
  let fixture: ComponentFixture<PubPapersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubPapersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPapersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
