import { Component, Input, OnInit } from '@angular/core';
import { STATS_LOOKUP } from 'src/app/core/models';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
})
export class StatsCardComponent implements OnInit {
  @Input() statsData: any;
  colorMap = STATS_LOOKUP;
  constructor() {}

  ngOnInit(): void {}
}
