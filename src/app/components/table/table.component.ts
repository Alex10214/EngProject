import {Component, OnInit} from '@angular/core';
import {arrIrregularVerbs} from '../../data/arrData'

export interface IrregularVerb {
  infinitive: string;
  pastSimple: string;
  participle: string;
  ru: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  data: IrregularVerb[] = [];
  thead: any[] = [];

  ngOnInit() {
    this.data = arrIrregularVerbs;
    console.log(this.data[0])

    for (let word in this.data[0]) {

      this.thead.push(word.trim().charAt(0).toUpperCase() + word.slice(1));
    }
    console.log(this.thead)
  }

  getObjectKeys(obj: any): any {
    let word =Object.keys(obj)
    console.log(word)
    // word.trim().charAt(0).toUpperCase() + word.slice(1)
    // Object.keys(obj).trim().charAt(0).toUpperCase() + word.slice(1)
    // return Object.keys(obj);
  }

}
