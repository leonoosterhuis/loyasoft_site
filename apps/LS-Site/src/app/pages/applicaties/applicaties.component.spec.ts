import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplicatiesComponent} from './applicaties.component';

describe('ApplicatiesComponent', () => {
  let component: ApplicatiesComponent;
  let fixture: ComponentFixture<ApplicatiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicatiesComponent],
    });
    fixture = TestBed.createComponent(ApplicatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
