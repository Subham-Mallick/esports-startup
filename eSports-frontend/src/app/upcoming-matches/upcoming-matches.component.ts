import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.scss']
})
export class UpcomingMatchesComponent implements OnInit {

  public allUpcomingMatches = [];
  constructor() { }

  ngOnInit() {
    this.allUpcomingMatches = [
      {terrorists: 'ABC', counter_terrorists: 'XYZ'},
      {terrorists: 'JGJH', counter_terrorists: 'FT4G'},
      {terrorists: 'NSAG', counter_terrorists: 'JMWY'},
      {terrorists: 'HAYR', counter_terrorists: 'GTS'}
    ]
  }

}
