import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { WhatIDoComponent } from './pages/what-i-do/what-i-do.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { SharedModule } from '../shared/shared.module';
import { SkillRatingComponent } from './pages/skills/skill-rating/skill-rating.component';
import { BadgeComponent } from './pages/skills/badge/badge.component';


@NgModule({
  declarations: [AboutMeComponent, WhatIDoComponent, SkillsComponent, ExperienceComponent, PortfolioComponent, ContactMeComponent, SkillRatingComponent, BadgeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class HomeModule { }
