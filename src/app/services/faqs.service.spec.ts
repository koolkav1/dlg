import { TestBed } from '@angular/core/testing';

import { FAQsService } from './faqs.service';

describe('AccordionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FAQsService = TestBed.get(FAQsService);
    expect(service).toBeTruthy();
  });
});
