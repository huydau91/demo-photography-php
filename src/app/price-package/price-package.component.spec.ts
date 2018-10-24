import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePackageComponent } from './price-package.component';

describe('PricePackageComponent', () => {
  let component: PricePackageComponent;
  let fixture: ComponentFixture<PricePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
