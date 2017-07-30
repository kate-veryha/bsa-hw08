import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>test</h1>
    <input type="radio" name="select-time-options">Clock
    <input type="radio" name="select-time-options">Stopwatch
    <input type="radio" name="select-time-options">Timer
    <!--<app-clock></app-clock>-->
    <app-timer></app-timer>
  `
})
export class AppComponent { }
