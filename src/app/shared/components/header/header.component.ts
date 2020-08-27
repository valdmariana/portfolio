import { Component, OnInit } from '@angular/core';
import { faHandshake, faAddressCard, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faUserNinja, faUserTie, faGraduationCap, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

  showMenuMobile(e: any) {
    this.showMobile = e.target.checked
  }

}
