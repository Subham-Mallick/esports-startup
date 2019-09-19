import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { MaterialAppModule } from './ngmaterial.module';
import { InputTextModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { MatchScoresService } from '../shared/match-scores.service';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
