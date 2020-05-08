import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
import { IFAQ } from '../interfaces/faq';
import FAQS  from './faqs.json';

@Injectable({
  providedIn: 'root'
})
export class FAQsService {


  constructor(private http: HttpClient) {
   }
  public getJson(): Observable<any> {
    return of(FAQS).pipe(delay(1000));
  }
}
