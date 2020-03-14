import { Component } from '@angular/core';
import { CounterService } from './counter.service'


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
  seconds: number = 60;
  counterService: CounterService
  constructor(counterService: CounterService)
     {
      counterService.seconds.subscribe((secondss) => {
        this.seconds = secondss;
    });
    this.Game();
  }
  Game() {
    this.attempts = 10;
    this.number = getNumber(1, 100);
    console.log(this.number);
  }
  Guess() {
    this.difference = this.number - this.guess;
    this.attempts--;
  }
  Restart() {
   location.reload();
  }
}

