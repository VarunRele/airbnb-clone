import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyButtonComponent } from './add-property-button.component';

describe('AddPropertyButtonComponent', () => {
  let component: AddPropertyButtonComponent;
  let fixture: ComponentFixture<AddPropertyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPropertyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPropertyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
