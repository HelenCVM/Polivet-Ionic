import { TestBed } from '@angular/core/testing';

import { RecordarContraService } from './recordar-contra.service';

describe('RecordarContraService', () => {
  let service: RecordarContraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordarContraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
