import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeSwitchComponent } from './component-items/theme-switch/theme-switch.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { SectionThreeComponent } from './sections/section-three/section-three.component';
import { SectionFourComponent } from './sections/section-four/section-four.component';
import { SectionFiveComponent } from './sections/section-five/section-five.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
