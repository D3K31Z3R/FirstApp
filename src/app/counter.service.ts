import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number = 60;
  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable();
  constructor() {
    setInterval(() => {
      while(this.counter > 0){
        this.counter -= 1;
        this.secondsSubject.next(this.counter);
      }
    }, 1000)
   }
}
