import { Component, OnInit } from '@angular/core';
import { faUniversity, faBriefcase, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

  constructor() { 
  }

  faUniversity = faUniversity;
  faCalendarAlt = faCalendarAlt;
  faBriefcase = faBriefcase;
  faUserCircle = faUserCircle;


  ngOnInit(): void {
  }

}
