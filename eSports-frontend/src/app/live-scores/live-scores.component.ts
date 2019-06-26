import { Component, OnInit } from '@angular/core';
import { Scores } from '../../shared/types';
import { MatchScoresService } from '../../shared/match-scores.service';

@Component({
  selector: 'app-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.scss']
})
export class LiveScoresComponent implements OnInit {

  public matchScores: Scores[] = [];
  public latestScores: Scores = {
    scoreID: '',
    kills: 0,
    assists: 0,
    deaths: 0
  };
  public counter = 0;
  public message;

  constructor(public matchScoresService: MatchScoresService) { }

  ngOnInit() {
    console.log("Live Scores onInit is called.");
    this.matchScoresService.getAllScores().subscribe(
      res => {
        this.matchScores = res.data;
        this.latestScores = JSON.parse(JSON.stringify(this.matchScores[0]));
        console.log(this.latestScores)
      }, err => {
        console.log("some error occured");
      })
  }

  public updateScores = (ctr) => {
    console.log(ctr)
    this.latestScores = {
      scoreID: '',
      kills: 0,
      assists: 0,
      deaths: 0
    }
    if(ctr >= this.matchScores.length-1){
      this.latestScores = this.matchScores[this.matchScores.length-1];
      this.message = "This is the final score."
    } else{
      this.latestScores = this.matchScores[ctr];
    }
    
  }

}
