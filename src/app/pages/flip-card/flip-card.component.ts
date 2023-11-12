import {Component, OnInit} from '@angular/core';

import {wordsArray} from '../../data/arrData'
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.2s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.2s', style({opacity: 0}))
      ]),
    ])
  ]
})

export class FlipCardComponent implements OnInit {
  isFlipped: boolean = false;
  wordsInEng: string[] = [];
  wordsInRu: string[] = [];
  testLet = true;
  totalWords = 0
  shuffledArray = wordsArray;
  languages = [
    {id: 1, value: "Английский"},
    {id: 2, value: "Русский"},
    {id: 3, value: "Случайно"}
  ]
  initialStateLang = "Английский";
  currentCardIndex: number = 0;
  ngOnInit() {
    this.shuffledArray = this.shuffle(wordsArray);
    console.log(this.shuffledArray)
    this.totalWords = this.shuffledArray.length;
    this.customChangeWords();
    this.checkLanguages(this.initialStateLang);
    this.changeLanguage(this.initialStateLang);
  }
  changeLanguage(value: string) {
    this.initialStateLang = value;
    this.checkLanguages(this.initialStateLang);
  }
  // перетасовываю массив
  shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  checkLanguages(language: string) {

    switch (language) {
      case 'Английский':
        this.isFlipped = true;
        break;
      case 'Русский':
        this.isFlipped = false
        break
      case 'Случайно':
        this.isFlipped = Math.random() > 0.5
        break
    }
  }

  previousCard() {
    this.testLet = false;
    this.checkLanguages(this.initialStateLang);
    this.currentCardIndex = (this.currentCardIndex - 1 + this.shuffledArray.length) % this.shuffledArray.length;
    this.customChangeWords();
    setTimeout(() => {
      this.testLet = true;
    },200)
  }

  nextCard() {
    this.testLet = false;
    this.checkLanguages(this.initialStateLang);
    this.currentCardIndex = (this.currentCardIndex + 1) % this.shuffledArray.length;
    this.customChangeWords();
    setTimeout(() => {
      this.testLet = true;
    },200)
  }



  customChangeWords() {
    this.wordsInEng = this.shuffledArray[this.currentCardIndex].eng.split(',').map((word: string, index: number) => {
      word = word.trim()
      if (index !== this.shuffledArray[this.currentCardIndex].eng.split(',').length - 1) {
        return word.trim().charAt(0).toUpperCase() + word.slice(1) + ',';
      }
      return word.trim().charAt(0).toUpperCase() + word.slice(1);
    });

    this.wordsInRu = this.shuffledArray[this.currentCardIndex].ru.split(',').map((word: string, index: number) => {
      word = word.trim()
      if (index !== this.shuffledArray[this.currentCardIndex].ru.split(',').length - 1) {
        return word.trim().charAt(0).toUpperCase() + word.slice(1) + ',';
      }
      return word.trim().charAt(0).toUpperCase() + word.slice(1);
    });
  }

}
