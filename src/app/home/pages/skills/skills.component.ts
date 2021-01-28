import { Component, OnInit } from '@angular/core';
import { faUsers, faBook, faClipboardList, faBookReader, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faUsers = faUsers;
  faBookReader = faBookReader;
  faClipboardList = faClipboardList;
  faCalendarAlt = faCalendarAlt;
  faLightbulb = faLightbulb;
  title: string = "";
  constructor(private translate: TranslateService) {
    this.translate.get('Skills').subscribe((data: any) => {
      this.title = data;
    });
  }

  ngOnInit() {
  }

}
