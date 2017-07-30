import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="radio" name="select-time-options" value="clock">Clock<br>
      <input type="radio" name="select-time-options" value="stopwatch">Stopwatch
      <input type="radio" name="select-time-options" value="timer">Timer
    </div>`
})
export class AppComponent {

}
