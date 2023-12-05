import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Day} from "../../intefaces/interfaces";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{

  @Input() arrData: Day[] = [];

  data: Day[] = [];
  columns: Array<keyof Day> = ["ru", "eng"];

  ngOnChanges(): void {
    if (this.arrData.length) {
      this.data = this.arrData;
    }
  }

  ngOnInit() {
    this.data = this.arrData;
    console.log(this.data)
  }

  capitalize(str: string) {
    return str.toUpperCase()
  }
}
