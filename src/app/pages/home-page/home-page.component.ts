import {Component, OnInit} from '@angular/core';

import {arrDays} from "../../data/arrData";

export interface PeriodicElement {
  eng: string;
  ru: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  dataSource: PeriodicElement[] = [];
  displayedColumns: string[] = ['eng', 'ru'];
  panelOpenState = false;

  ngOnInit() {
    console.log(arrDays)
    this.dataSource = arrDays;
  }

}
