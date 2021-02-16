import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  selectedChild: string;
  title: string = "";
  constructor(private translate: TranslateService) {
    this.translate.get('Experience').subscribe((data: any) => {
      this.title = data;
    });
  }

  ngOnInit() {
  }

}
