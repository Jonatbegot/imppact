import { TestBed, inject } from '@angular/core/testing';

import { AdressesService } from './adresses.service';

describe('AdressesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdressesService]
    });
  });

  it('should be created', inject([AdressesService], (service: AdressesService) => {
    expect(service).toBeTruthy();
  }));
});
