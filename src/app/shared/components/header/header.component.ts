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
    this.menuItems.push(new MenuItem(faHandshake, 'AboutMe', '#first'));
    this.menuItems.push(new MenuItem(faUserTie, 'WhatIDo', '#first'));
    this.menuItems.push(new MenuItem(faLaptopCode, 'Skills', '#first'));
    this.menuItems.push(new MenuItem(faGraduationCap, 'Experience', '#first'));
    this.menuItems.push(new MenuItem(faFolderOpen, 'Portfolio', '#first'));
    this.menuItems.push(new MenuItem(faMobileAlt, 'Contact', '#first'));
  }

  showMenuMobile(e: any) {
    this.showMobile = e.target.checked;
    setTimeout(() => {
      this.showItem = this.showMobile;
    }, 500);
  }
}
