import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  mouseOvered: boolean = false;
  @Input() iconBadge: IconDefinition;
  @Input() textBadge: string;

  constructor() { }

  ngOnInit() {
  }

}
