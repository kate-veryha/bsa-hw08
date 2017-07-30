import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <div>
      <span>{{time.getHours()}}</span>:
      <span>{{time.getMinutes()}}</span>:
      <span>{{time.getSeconds()}}</span>
    </div>
    <input placeholder="Timer duration"
           type="number"
           [(ngModel)]="minutesSet"
           [disabled]="isActive"
           (change)="setTimer()"
           min="0"
           max="1439">
    <button type="button" (click)="startTimer()">Start</button>
    <button type="button" (click)="pauseTimer()">Pause</button>
    <button type="button" (click)="resetTimer()">Reset</button>
  `,
})
export class TimerComponent implements OnInit {
  isActive: boolean;
  time = new Date(2000, 1, 1, 0, 0, 0);
  minutesSet: number;

  ngOnInit(): void {
    this.isActive = false;
  }
  updateTimer(): void {
    if (this.isActive) {
      this.time.setSeconds(this.time.getSeconds(), -1);
      if (this.time.getHours() === 0
        && this.time.getMinutes() === 0
        && this.time.getSeconds() === 0) {
        this.isActive = false;
      }
    }
    setTimeout(() => this.updateTimer(), 1000);
  }

  setTimer(): void {
    this.time.setMinutes(this.minutesSet);
    console.log(this.time);
  }

  startTimer(): void {
    if (this.minutesSet > 0) {
      this.isActive = true;
      this.updateTimer();
    } else {
      alert('Insert valid number of minutes');
    }

  }

  pauseTimer(): void {
    this.isActive = false;
  }

  resetTimer(): void {
    this.isActive = false;
    this.time = new Date(2000, 1, 1, 0, 0, 0);
  }

}

