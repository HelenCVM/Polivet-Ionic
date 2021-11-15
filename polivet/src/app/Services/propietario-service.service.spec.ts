import { TestBed } from '@angular/core/testing';

import { PropietarioServiceService } from './propietario-service.service';

describe('PropietarioServiceService', () => {
  let service: PropietarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropietarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
