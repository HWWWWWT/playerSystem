import { TestBed, inject } from '@angular/core/testing';

import { AddplayService } from './addplay.service';

describe('AddplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddplayService]
    });
  });

  it('should be created', inject([AddplayService], (service: AddplayService) => {
    expect(service).toBeTruthy();
  }));
});
