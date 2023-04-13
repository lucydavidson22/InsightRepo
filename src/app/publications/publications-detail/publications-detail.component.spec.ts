import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsDetailComponent } from './publications-detail.component';

describe('PublicationsDetailComponent', () => {
  let component: PublicationsDetailComponent;
  let fixture: ComponentFixture<PublicationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
