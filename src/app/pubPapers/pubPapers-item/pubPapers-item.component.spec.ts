import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPapersItemComponent } from './pubPapers-item.component';

describe('PubPapersItemComponent', () => {
  let component: PubPapersItemComponent;
  let fixture: ComponentFixture<PubPapersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubPapersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPapersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
