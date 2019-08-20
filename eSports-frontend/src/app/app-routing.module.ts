import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveScoresComponent } from './live-scores/live-scores.component';
<<<<<<< HEAD
import { AllMatchesComponent } from './all-matches/all-matches.component';

const routes: Routes = [
  {path: 'live-scores', component: LiveScoresComponent},
  {path: 'all-matches', component: AllMatchesComponent},
=======

const routes: Routes = [
  {path: 'live-scores', component: LiveScoresComponent},
>>>>>>> 0d1fa5367adbce45aee45e62043b972f6fb3d26c
  {path: '', redirectTo: 'live-scores', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
