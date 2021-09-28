import { Component, OnInit } from '@angular/core';
import { faCogs, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';


interface projectCard {
  imgURL: string;
  title: string;
  link?: string;
  description: string;
  technologies: string;
}

@Component({
  selector: 'section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit {

  constructor() { }

  faCogs = faCogs;
  faExternalLinkAlt = faExternalLinkAlt;

  ngOnInit(): void {
  } 

  projects: projectCard[] = [
    {
      imgURL: "assets/img/prj_images/p1.JPG",
      title: "Bluetube Downloader ",    
      description: "A project created to download both youtube videos and playlists. Further you can select only the necessary videos from the playlist before download.",  
      technologies: " Angular 10, Angular Materials, Node.JS, ytdl-Core Library, Anime.JS, Heroku, Netlify", 
      link: "https://bluetube.netlify.app"
    },
    {
      imgURL: "assets/img/prj_images/p2.JPG",
      title: "Public Chat  App",    
      description: "This is a public chat app created by me to get hands-on experience on the SignalR library together with .NET Core Framework.",  
      technologies: " Angular 10, ASP.NET Core, SignalR Libraries, Heroku, Netlify", 
      link: "https://public-chat-app.netlify.app/"
    },
    {
      imgURL: "assets/img/prj_images/p3.PNG",
      title: "Invento",    
      description: "This is a fixed assets management system taken from industry. I implemented the whole backend and had to work in the frontend too to complete some features while leading the team.",  
      technologies: "Angular 7, Spring boot, MySQL, Ionic 3", 
      link: ""
    },
    {
      imgURL: "assets/img/prj_images/p4.png",
      title: "PROJECT APEX",    
      description: "This is my second internship project which is a salary packaging system whose owners are from Australia. The team followed Agile Scrum Methodology and I implemented several features of the system.",  
      technologies: "Vue.JS, ASP.NET Core, Azure Cloud, MSSQL, Flutter", 
      link: ""
    },
    {
      imgURL: "assets/img/prj_images/p5.png",
      title: "PROJECT DROPPOINT",    
      description: "This is my first internship project which is an Australian-based project. This is an item delivery system and I implemented several features of the system.",  
      technologies: "Angular 10, ASP.NET Core, Azure Cloud, MSSQL", 
      link: ""
    },
    {
      imgURL: "assets/img/prj_images/p5.png",
      title: "Hoyamu Project",    
      description: "This is one of my own projects. This app is being created with the intention of helping people to find lost items",  
      technologies: "Ionic 5, ASP.NET Core, Firebase, Azure Web Apps", 
      link: ""
    },
  ]



}

