<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'hammerjs';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

>>>>>>> 0d1fa5367adbce45aee45e62043b972f6fb3d26c
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { MaterialAppModule } from './ngmaterial.module';
import { InputTextModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { MatchScoresService } from '../shared/match-scores.service';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
=======
>>>>>>> 0d1fa5367adbce45aee45e62043b972f6fb3d26c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LiveScoresComponent,
    AllMatchesComponent,
    UpcomingMatchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialAppModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ],
  providers: [HttpClient, MatchScoresService],
=======
    LiveScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
>>>>>>> 0d1fa5367adbce45aee45e62043b972f6fb3d26c
  bootstrap: [AppComponent]
})
export class AppModule { }
