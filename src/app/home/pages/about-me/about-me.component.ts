import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  title: string = "";
  constructor(
    private translate: TranslateService) {
    this.translate.get('AboutMe').subscribe((data: any) => {
      this.title = data;
    });
  }

  ngOnInit() {
  }

}
