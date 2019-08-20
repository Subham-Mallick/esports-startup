import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMatchesComponent } from './upcoming-matches.component';

describe('UpcomingMatchesComponent', () => {
  let component: UpcomingMatchesComponent;
  let fixture: ComponentFixture<UpcomingMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
