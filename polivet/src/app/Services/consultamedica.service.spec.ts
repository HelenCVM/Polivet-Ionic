import { TestBed } from '@angular/core/testing';

import { ConsultamedicaService } from './consultamedica.service';

describe('ConsultamedicaService', () => {
  let service: ConsultamedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultamedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
