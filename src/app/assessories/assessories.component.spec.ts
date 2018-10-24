import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessoriesComponent } from './assessories.component';

describe('AssessoriesComponent', () => {
  let component: AssessoriesComponent;
  let fixture: ComponentFixture<AssessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
