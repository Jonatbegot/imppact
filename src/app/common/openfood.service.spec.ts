import { TestBed, inject } from '@angular/core/testing';

import { OpenfoodService } from './openfood.service';

describe('OpenfoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenfoodService]
    });
  });

  it('should be created', inject([OpenfoodService], (service: OpenfoodService) => {
    expect(service).toBeTruthy();
  }));
});
