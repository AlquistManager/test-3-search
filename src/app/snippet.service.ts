import { Injectable } from '@angular/core';
import { RetSnippet } from './snippet';
/* import { SNIPPETS, } from './mock-snippets'; */
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private http: HttpClient) { }

  private snippetUrl = 'https://paraphrasing-develop.alquist.ai/v2/models/Paraphrasing/infer';  // URL to web api
//  private snippetUrl = 'api/snippets';  // URL to web api
// https://table-qa-develop.alquist.ai/v2/models/TableQA/infer

  /** GET heroes from the server */
  getSnippets( ): Observable<RetSnippet[]> {
    console.log ("get: no param ");
    return this.http.get<RetSnippet[]>(this.snippetUrl)
  }
  wxit :  Observable<RetSnippet> | undefined;
  /** POST: add a new hero to the server */
  postQuestion (search : string ): Observable<RetSnippet> {
    var body = {
      text : search,
      paraphrases_num : 5,
      diverse : "True",
      top_k: 80,
      top_p: 0.92,
      temperature: 1.6
    }

    console.log ("snippet-sevice post: ", search);

    return this.http.post<RetSnippet>(this.snippetUrl, body, this.httpOptions) 
  }  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
    
    /* .map(res=> <any> res.json());
    console.log ("snippet wxit", this.wxit) */
    
   /* return this.http.post<Snippet[]>(this.snippetUrl, body, this.httpOptions); */
 
    /* .pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))  );*/


