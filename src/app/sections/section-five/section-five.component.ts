import { Component, OnInit } from '@angular/core';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { ngxLightOptions } from  'ngx-light-carousel/public-api'

@Component({
  selector: 'section-five-articles',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent implements OnInit {

  carousalOptions: ngxLightOptions;
	slides: any[]	;

  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() {
    // construct the config object
		this.carousalOptions = {
      animation: {
        animationClass: 'transition',
        animationTime: 200,
      },
      swipe: {
        swipeable: false,
        swipeVelocity: 1,
      },
      scroll: {
        numberToScroll: 1
      },
      drag: {
        draggable: true,
        dragMany: true,
      },
      arrows: true,
      indicators: true,
      infinite: true,
      autoplay: {
        enabled: false,
        direction: 'right',
        delay: 2000,
        stopOnHover: true,
      },
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    }
    
    // construct an array of slides
          this.slides = []
    this.slides.push({
      title: '1 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?0`,
    });
    this.slides.push({
      title: '2 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?1`,
    });
    this.slides.push({
      title: '3 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?2`,
    });
    this.slides.push({
      title: '4 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?3`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });

    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: '5 Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    

   }

  faReadme = faReadme;
  
  ngOnInit(): void {
  }

}
