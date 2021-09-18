import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  constructor(private themeService : ThemeService) { }

  @ViewChild('chk') chk: any;

  faMoon = faMoon;
  faSun = faSun

  ngOnInit(): void {
      this.chk = document.getElementById('chk');

    
      this.chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        console.log('Theme changed')
        if (this.themeService.isDarkTheme()) {
          this.themeService.setLightTheme();
        } else {
          this.themeService.setDarkTheme();
        }
      });
    

    // SOCIAL PANEL JS
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');

  }

  
}
