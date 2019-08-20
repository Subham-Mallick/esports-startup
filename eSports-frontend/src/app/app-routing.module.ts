import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';

const routes: Routes = [
  {path: 'live-scores', component: LiveScoresComponent},
  {path: 'all-matches', component: AllMatchesComponent},
  {path: '', redirectTo: 'live-scores', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
