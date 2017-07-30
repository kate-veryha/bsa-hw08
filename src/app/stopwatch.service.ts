import { Injectable } from '@angular/core';

@Injectable()
export class StopwatchService {
  public laps: Lap[];
  private startAt: number;
  private lapTime: number;

  constructor() {
    this.reset();
  }

  lap() {
    const timeMs = this.startAt
      ? this.lapTime + this.now() - this.startAt
      : this.lapTime;

    this.laps[this.laps.length - 1].stop(timeMs);
    this.laps.push(new Lap(timeMs));
  }

  now() {
    return _now();
  }

  reset() {
    this.startAt = 0;
    this.lapTime = 0;

    this.laps = new Array<Lap>();
    this.laps.push(new Lap(0));
  }

  start() {
    this.startAt = this.startAt
      ? this.startAt
      : this.now();
  }

  stop() {
    const timeMs = this.startAt
      ? this.lapTime + this.now() - this.startAt
      : this.lapTime;

    this.lapTime = timeMs;
    this.laps[this.laps.length - 1].stop(timeMs);
    this.startAt = 0;
  }

  time() {
    return this.lapTime
      + (this.startAt ? this.now() - this.startAt : 0);
  }
}

export class Lap {
  public startMs: number;
  public stopMs: number;
  public lapTime: number;

  constructor(start: number) {
    this.lapTime = 0;
    this.startMs = start;
    this.stopMs = 0;
  }

  stop(endMs: number) {
    this.stopMs = endMs;
    this.lapTime = (this.stopMs - this.startMs);
  }
}

function _now() { return (new Date).getTime(); }
