import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BMIComponent } from './bmi.component';

describe('BMIComponent', () => {
  let component: BMIComponent;
  let fixture: ComponentFixture<BMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMIComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
