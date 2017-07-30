import { Component } from '@angular/core';
import { StopwatchService} from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div class="container">
      <p>{{ formatTime(time) }}</p>
      <p *ngIf="stopwatchService.laps.length > 1">
        {{ formatTime(time - stopwatchService.laps[stopwatchService.laps.length - 1].startMs)}}
      </p>
      <div class="btn-group">
        <button (click)="toggle()">
          <span *ngIf="!isActive">Start</span>
          <span *ngIf="isActive">Pause</span>
        </button>
        <button (click)="reset()">Reset</button>
        <button (click)="lap()">Split</button>
      </div>
      <div class="laps"
           *ngIf="stopwatchService.laps.length > 1">
        <div>Average: {{formatTime(avgTime())}}</div>
        <div class="lap"
             *ngFor="let lap of stopwatchService.laps; let i = index; let last = last;">
          <h3>Lap {{ i + 1 }}</h3>
          <div>Time: {{formatTime(lap.lapTime)}}</div>
          <div
            *ngIf="(i > 0)"
            [class.red]="(lap.lapTime - avgTime()) < 0"
            [class.green]="(lap.lapTime - avgTime()) >= 0"
          >
            Diff avg: {{formatTime(lap.lapTime - avgTime())}}</div>
          <div
            *ngIf="(i > 0)"
            [class.red]="lap.lapTime - stopwatchService.laps[i-1].lapTime < 0"
            [class.green]="lap.lapTime - stopwatchService.laps[i-1].lapTime >= 0"
          >
            Prev: {{formatTime(lap.lapTime - stopwatchService.laps[i-1].lapTime)}}
          </div>
          <div>Start: {{ formatTime(lap.startMs) }}</div>
          <div *ngIf="last">Stop: {{ formatTime(time) }}</div>
          <div *ngIf="!last">Stop: {{ formatTime(lap.stopMs) }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .red {
      color: red;
    }
    .green {
      color: green;
    }
  `]
})
export class StopwatchComponent {
  isActive: boolean;
  time: number;


  private timer: any;

  constructor(public stopwatchService: StopwatchService) {
    this.stopwatchService = stopwatchService;
    this.time = 0;
    this.isActive = false;
  }

  formatTime(timeMs: number) {
    let minutes: string,
        seconds: string;
    minutes = Math.floor(timeMs / 60000).toString();
    seconds = ((timeMs % 60000) / 1000).toFixed(3);
    return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
  }

  getUpdate() {
    const self = this;
    return () => {
      self.time = this.stopwatchService.time();
    };
  }

  lap() {
    this.update();

    if (this.time) {
      this.stopwatchService.lap();
    }
  }

  reset() {
    this.stopwatchService.reset();
    this.isActive = false;
    this.update();
  }

  start() {
    this.timer = setInterval(this.getUpdate(), 1);
    this.stopwatchService.start();
  }

  stop() {
    clearInterval(this.timer);
    this.stopwatchService.stop();
  }

  toggle() {
    if (this.isActive) {
      this.stop();
    } else {
      this.start();
    }

    this.isActive = !this.isActive;
  }

  update() {
    this.time = this.stopwatchService.time();
  }

  avgTime() {
    const times = this.stopwatchService
      .laps.map((obj) =>  obj.lapTime );
    const sum = times.reduce(function(a, b) { return a + b; });
    return sum / times.length;
  }
}
