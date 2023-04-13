import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MciListComponent } from './mci-list.component';

describe('MciListComponent', () => {
  let component: MciListComponent;
  let fixture: ComponentFixture<MciListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MciListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
