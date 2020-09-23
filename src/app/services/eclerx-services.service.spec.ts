import { TestBed } from '@angular/core/testing';

import { EclerxServicesService } from './eclerx-services.service';

describe('EclerxServicesService', () => {
  let service: EclerxServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EclerxServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
