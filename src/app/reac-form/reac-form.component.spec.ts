import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacFormComponent } from './reac-form.component';

describe('ReacFormComponent', () => {
  let component: ReacFormComponent;
  let fixture: ComponentFixture<ReacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
