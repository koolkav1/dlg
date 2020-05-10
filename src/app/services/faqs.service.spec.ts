import { TestBed } from '@angular/core/testing';

import { FAQsService } from './faqs.service';
import { IFAQ } from '../interfaces/faq';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AccordionService', () => {
  let faqsService: FAQsService;
  let  httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          FAQsService
      ]
  });
    faqsService = TestBed.get(FAQsService);
    httpTestingController = TestBed.get(HttpTestingController);
 });



  it('should be created', () => {
    const service: FAQsService = TestBed.get(FAQsService);
    expect(service).toBeTruthy();
  });
  it('should retrieve all the faqs', () => {
   const service = faqsService;
   service.getJson().subscribe(faqs => {
      expect(faqs).toBeTruthy('No FAQs found');
      const faq: IFAQ = faqs.find((FAQ: IFAQ) => FAQ.id === 1);
      expect(faq.question).toBe('What vehicles are covered?');
    });
   expect(service).toBeTruthy();
  });
});
