import { Injectable } from '@angular/core';
import {arrDays} from "../../data/arrData";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) { }

  getDays() {
    return of(arrDays);
  }
}
