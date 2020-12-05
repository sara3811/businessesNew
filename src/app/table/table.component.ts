import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  services:['aa','bb','cc'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.services);
  }

}
