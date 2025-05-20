import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReactiveFormComponent } from './student-reactive-form.component';

describe('StudentReactiveFormComponent', () => {
  let component: StudentReactiveFormComponent;
  let fixture: ComponentFixture<StudentReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
