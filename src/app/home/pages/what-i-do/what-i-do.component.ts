import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.css']
})
export class WhatIDoComponent implements OnInit {
  title: string = "";
  constructor(private translate: TranslateService) {
    this.translate.get('WhatIDo').subscribe((data: any) => {
      this.title = data;
    });
  }

  ngOnInit() {
  }

}
