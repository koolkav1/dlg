import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  data: any =
    [
      {
        'parentName': 'Parent One',
        'childProperties':
          [
            { 'propertyName': 'Property One' },
            { 'propertyName': 'Property Two' }
          ]
      },
      {
        'parentName': 'Parent Two',
        'childProperties':
          [
            { 'propertyName': 'Property Three' },
            { 'propertyName': 'Property Four' },
            { 'propertyName': 'Property Five' },
          ]
      },
      {
        'parentName': 'Parent Three',
        'childProperties':
          [
            { 'propertyName': 'Property Six' },
            { 'propertyName': 'Property Seven' },
            { 'propertyName': 'Property Eight' },
          ]
      }
    ];

  ngOnInit() {

  }
  toggleAccordian(event, index) {
      let element = event.target;
      element.classList.toggle('active');
      if (this.data[index].isActive) {
        this.data[index].isActive = false;
      } else {
        this.data[index].isActive = true;
      }
      let panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
  }

}
