import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-clock',
 template: `
   <div>
     {{currentTime | date:"HH:mm:ss"}}
   </div>
 `
})

export class ClockComponent implements OnInit {
  currentTime = new Date();

  ngOnInit(): void {
    this.updateClock();
  }

  updateClock(): void {
    this.currentTime = new Date();
    setTimeout(() => this.updateClock(), 500);
  }
}
