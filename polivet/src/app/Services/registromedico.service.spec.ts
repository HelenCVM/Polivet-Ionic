import { TestBed } from '@angular/core/testing';

import { RegistromedicoService } from './registromedico.service';

describe('RegistromedicoService', () => {
  let service: RegistromedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistromedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
