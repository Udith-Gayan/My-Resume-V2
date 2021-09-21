import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faUniversity, faPhoneAlt, faBriefcase, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  constructor() { }

  faMapMarkerAlt =faMapMarkerAlt;
  faPhoneAlt =faPhoneAlt;
  
  faUniversity =faUniversity;
  faCalendarAlt = faCalendarAlt;
  faBriefcase = faBriefcase;
  faUserCircle = faUserCircle;


  ngOnInit(): void {
  }

}
