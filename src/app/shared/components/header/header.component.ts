import { Component, OnInit } from '@angular/core';
import { faHandshake, faAddressCard, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faUserNinja, faUserTie, faGraduationCap, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHandshake = faHandshake;
  faAddressCard = faAddressCard;
  faUserNinja = faUserNinja;
  faUserTie = faUserTie;
  faGraduationCap = faGraduationCap;
  faLaptopCode = faLaptopCode;
  faFolderOpen = faFolderOpen;
  faMobileAlt = faMobileAlt;
  showMobile: boolean = false;
  showItem: boolean = null;
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.initMenuItems();
  }

  initMenuItems() {
    this.menuItems.push(new MenuItem(faHandshake, 'AboutMe', ['about-me']));
    this.menuItems.push(new MenuItem(faUserTie, 'WhatIDo', ['what-i-do']));
    this.menuItems.push(new MenuItem(faLaptopCode, 'Skills', ['skills']));
    this.menuItems.push(new MenuItem(faGraduationCap, 'Experience', ['experience']));
    this.menuItems.push(new MenuItem(faFolderOpen, 'Portfolio', ['portfolio']));
    this.menuItems.push(new MenuItem(faMobileAlt, 'Contact', ['contact-me']));
  }

  showMenuMobile(e: any) {
    this.showMobile = e.target.checked;
    setTimeout(() => {
      this.showItem = this.showMobile;
    }, 500);
  }
}
