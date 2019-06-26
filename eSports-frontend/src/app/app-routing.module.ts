import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveScoresComponent } from './live-scores/live-scores.component';

const routes: Routes = [
  {path: 'live-scores', component: LiveScoresComponent},
  {path: '', redirectTo: 'live-scores', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
