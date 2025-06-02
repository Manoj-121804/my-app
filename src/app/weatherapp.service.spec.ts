import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherappService } from './weatherapp.service';

describe('WeatherappService', () => {
  let service: WeatherappService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
