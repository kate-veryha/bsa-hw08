import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';
import { TimerComponent } from './timer.component';
import { StopwatchComponent } from './stopwatch.component';
import {StopwatchService} from './stopwatch.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerComponent,
    StopwatchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StopwatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
