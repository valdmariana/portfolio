import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-rating',
  templateUrl: './skill-rating.component.html',
  styleUrls: ['./skill-rating.component.css']
})
export class SkillRatingComponent implements OnInit {
  @Input() rating: number;
  constructor() {
  }

  ngOnInit() {
  }

}
