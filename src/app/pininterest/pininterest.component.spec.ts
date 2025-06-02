import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PininterestComponent } from './pininterest.component';

describe('PininterestComponent', () => {
  let component: PininterestComponent;
  let fixture: ComponentFixture<PininterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PininterestComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PininterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
