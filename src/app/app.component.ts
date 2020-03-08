import { Component } from '@angular/core';


function getNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guess: number;
  difference: number;
  attempts: number;
  number: number;
  timeLeft: number;
  interval;
  constructor() {
    this.Game();
  }

  Game() {
    this.attempts = 10;
    this.number = getNumber(1, 100);
    this.timeLeft = 60;
    console.log(this.number);
  }
  Guess() {
    this.difference = this.number - this.guess;
    this.attempts--;
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 1;
      }
    }, 1000);
  }
}

