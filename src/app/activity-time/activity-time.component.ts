import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-time',
  templateUrl: './activity-time.component.html',
  styleUrls: ['./activity-time.component.scss']
})
export class ActivityTimeComponent implements OnInit {
  days = new FormControl();
  daysList: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  startTime:Date;
  endTime;
  constructor() { }

  ngOnInit(): void {
  }

}
