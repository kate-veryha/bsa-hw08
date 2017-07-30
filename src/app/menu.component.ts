import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <input type="checkbox" name="select-time-options" (change)="toggleClock()" checked>Clock
      <input type="checkbox" name="select-time-options" (change)="toggleStopwatch()">Stopwatch
      <input type="checkbox" name="select-time-options" (change)="toggleTimer()">Timer
    </div>
    <app-clock *ngIf="clockActive"></app-clock>
    <app-stopwatch *ngIf="stopwatchActive"></app-stopwatch>
    <app-timer *ngIf="timerActive"></app-timer>
  `
})
export class MenuComponent implements OnInit {
  public clockActive: boolean;
  public stopwatchActive: boolean;
  public timerActive: boolean;

  ngOnInit() {
    this.clockActive = true;
    this.stopwatchActive = false;
    this.timerActive = false;
  }
  //  буду благодарна за подсказку элегантной реализации
  toggleClock() { this.clockActive = !this.clockActive;  }

  toggleStopwatch() { this.stopwatchActive = !this.stopwatchActive; }

  toggleTimer() { this.timerActive = !this.timerActive; }
}
