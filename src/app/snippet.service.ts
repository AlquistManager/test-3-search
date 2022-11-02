import { Injectable } from '@angular/core';
import { RetSnippet, BodySrc } from './snippet';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private http: HttpClient) { }

  private snippetUrl = 'https://paraphrasing-develop.alquist.ai/v2/models/Paraphrasing/infer';  // URL to web api
  private searchUrl = 'https://manual-search-develop.alquist.ai/';  // URL to search  api
//  private snippetUrl = 'api/snippets';  // URL to web api

  /** GET heroes from the server */
  getSnippets( ): Observable<RetSnippet[]> {
    console.log ("get: no param ");
    return this.http.get<RetSnippet[]>(this.snippetUrl)
  }
  
  postQuestion1 (body : BodySrc ): Observable<RetSnippet> { 
    /* console.log ("snippet-sevice post: ", search); */
    console.log ("search bodySrc " + body);
    return this.http.post<RetSnippet>(this.searchUrl + "retrieve", body, this.httpOptions) 
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


