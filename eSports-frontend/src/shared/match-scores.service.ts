import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Scores } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchScoresService {

  public matchScores: Scores[] = [];
  public baseUrl = 'http://localhost:3000/api/v1';

  constructor(public httpClient: HttpClient) {
    console.log("MatchScoresService is called.")
   }

   //exception handler
   private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllScores(): Observable<any> {
<<<<<<< HEAD
    let allScores = this.httpClient.get(this.baseUrl + '/scores')
    return allScores;
  }// end get all scores

  public getAllMatches(): Observable<any> {
    console.log("Fetching matches...")
    let allMatches = this.httpClient.get(this.baseUrl + '/all-matches')
    console.log(allMatches)
    return allMatches;
  }// end get all matches
=======
    console.log("Fetching scores...")
    let allScores = this.httpClient.get(this.baseUrl + '/scores')
    console.log(allScores)
    return allScores;
  }// end get all books 
>>>>>>> 0d1fa5367adbce45aee45e62043b972f6fb3d26c

}
