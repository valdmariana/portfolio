import { Component, OnInit, NgZone, Input } from '@angular/core';
import { transition, trigger, animate, style, keyframes } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
  animations: [
    trigger('rubberBand', [
      transition('inactive => active', animate(600, keyframes([
        style({ transform: 'scale3d(1.25, 0.75, 1)', offset: .30 }),
        style({ transform: 'scale3d(0.75, 1.25, 1)', offset: .40 }),
        style({ transform: 'scale3d(1.15, 0.85, 1)', offset: .50 }),
        style({ transform: 'scale3d(0.95, 1.05, 1)', offset: .65 }),
        style({ transform: 'scale3d(1.05, 0.95, 1)', offset: .75 }),
        style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
      ]))),
    ])
  ]
})
export class HeaderSectionComponent implements OnInit {
  @Input() title: string;
  public rubberState: string[] = ["inactive", "inactive", "inactive"];

  constructor(public zone: NgZone) { }

  ngOnInit() {
  }

  animate(i: number) {
    this.rubberState[i] = "active";
  }

  reset(i: number) {
    this.zone.run(() => {
      this.rubberState[i] = "inactive";
    });
  }

  getSplit(string) {
    return string.split('');
  }

}
