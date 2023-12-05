import {Component, OnInit} from '@angular/core';
import {HomePageService} from "./home-page.service";
import {Day, Month} from "../../intefaces/interfaces";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  arrDays: Day[] = [];
  arrMounts: Month[] = [];
  panelOpenState = false;

  constructor(private homePageService: HomePageService) {
  }

  ngOnInit() {
    this.homePageService.getDays().subscribe((days: Day[]) => {
      this.arrDays = days;
    });

    this.homePageService.getDays().subscribe((days: Day[]) => {
      this.arrDays = days;
    });
  }

}
