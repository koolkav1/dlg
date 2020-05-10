import { Component, OnInit, OnDestroy } from '@angular/core';
import { FAQsService } from 'src/app/services/faqs.service';
import { IFAQ } from 'src/app/interfaces/faq';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  constructor(private faqService: FAQsService) {}
  data: IFAQ[];

  ngOnInit() {
    this.faqService.getJson().subscribe(data => this.data = data);

  }
  toggleAccordian(event, index) {
    const element = event.target;
    element.classList.toggle('active');
    if (this.data[index].isActive) {
        this.data[index].isActive = false;
      } else {
        this.data[index].isActive = true;
      }
    const panel = element.nextElementSibling;
    panel.classList.toggle('active');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
  }


}
