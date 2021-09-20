import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faMailBulk, faPhoneAlt, faBirthdayCake, faStar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow, faMedium} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  constructor() { }

  faMapMarkerAlt =faMapMarkerAlt;
  faMailBulk =faMailBulk;
  faPhoneAlt =faPhoneAlt;
  faBirthdayCake = faBirthdayCake;
  faStar = faStar;

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;

  ngOnInit(): void {
  }

}
