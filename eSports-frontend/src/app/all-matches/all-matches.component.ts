import { Component, OnInit } from '@angular/core';
import { Match } from '../../shared/types';
import { MatchScoresService } from '../../shared/match-scores.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.scss']
})
export class AllMatchesComponent implements OnInit {

  public matches: Match[] = [];
  public currentMatch;

  constructor(public matchScoresService: MatchScoresService) { }

  ngOnInit() {
    this.matchScoresService.getAllMatches().subscribe(
      resp => {
        const data = resp.data;
        this.matches = JSON.parse(JSON.stringify(data));
        // this.matches.forEach(match => {
        //   data.forEach(element => {
        //     match.counter_terrorists = element.counter_terrorists;
        //     match.terrorists = element.terrorists;
        //     match.tournament_id = element.tournament.id;
        //     match.match_id = element.match.id;
        //     match.game = element.game;
        //     match.map = element.map;
        //     match.game_number = element.game_number;
        //     match.round = element.round;
        //     match.current_timestamp = element.current_timestamp;
        //   });
        // });
       this.currentMatch = this.matches[0];
      },
      err => {
        console.log('some error occured while fetching all match details');
      }
    )
  }


  fetchMatchDetails = (match) => {
    this.currentMatch = match;
  }
}
