import {Component, OnInit} from '@angular/core';

import {wordsArray} from '../../data/arrData'

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  isFlipped: boolean = false;
  wordsInEng: string[] = [];
  wordsInRu: string[] = [];
  totalWords = wordsArray.length
  languages = [
    {id: 1, value: "Английский"},
    {id: 2, value: "Русский"},
    {id: 3, value: "Случайно"}
  ]
  initialStateLang = "Английский";
  currentCardIndex: number = 0;
  ngOnInit() {
    this.customChangeWords();
    this.checkLanguages(this.initialStateLang);
    this.changeLanguage(this.initialStateLang);
  }
  changeLanguage(value: string) {
    this.initialStateLang = value;
    this.checkLanguages(this.initialStateLang);
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
    this.checkLanguages(this.initialStateLang);
    this.currentCardIndex = (this.currentCardIndex - 1 + wordsArray.length) % wordsArray.length;
    if (this.initialStateLang === 'Случайно') {
      setTimeout(() => {
        this.customChangeWords();
      }, 150)
    } else {
      this.customChangeWords();
    }

  }

  nextCard() {
    this.checkLanguages(this.initialStateLang);
    this.currentCardIndex = (this.currentCardIndex + 1) % wordsArray.length;
    if (this.initialStateLang === 'Случайно') {
      setTimeout(() => {
        this.customChangeWords();
      }, 150)
    } else {
      this.customChangeWords();
    }
  }

  customChangeWords() {
    this.wordsInEng = wordsArray[this.currentCardIndex].eng.split(',').map((word: string, index: number) => {
      word = word.trim()
      if (index !== wordsArray[this.currentCardIndex].eng.split(',').length - 1) {
        return word.trim().charAt(0).toUpperCase() + word.slice(1) + ',';
      }
      return word.trim().charAt(0).toUpperCase() + word.slice(1);
    });

    this.wordsInRu = wordsArray[this.currentCardIndex].ru.split(',').map((word: string, index: number) => {
      word = word.trim()
      if (index !== wordsArray[this.currentCardIndex].ru.split(',').length - 1) {
        return word.trim().charAt(0).toUpperCase() + word.slice(1) + ',';
      }
      return word.trim().charAt(0).toUpperCase() + word.slice(1);
    });
  }


}
