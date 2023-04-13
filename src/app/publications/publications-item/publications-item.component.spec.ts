import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsItemComponent } from './publications-item.component';

describe('PublicationsItemComponent', () => {
  let component: PublicationsItemComponent;
  let fixture: ComponentFixture<PublicationsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
