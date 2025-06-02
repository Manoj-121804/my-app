import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherappComponent } from './weatherapp.component';

describe('WeatherappComponent', () => {
  let component: WeatherappComponent;
  let fixture: ComponentFixture<WeatherappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherappComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherappComponent);
    component = fixture.componentInstance;

    // ✅ Assign mock data AFTER component is initialized
    component.weather = {
      current_weather: {
        temperature: 28,
        windspeed: 12,
        winddirection: 150,
        is_day: 1,
        time: new Date().toISOString()
      },
      current_weather_units: {
        temperature: '°C',
        windspeed: 'km/h',
        winddirection: '°'
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
