/* import { registerLocaleData } from '@angular/common'; */
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RetSnippet, Body, BodySrc } from '../snippet';
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnChanges {

  constructor( private snippetService: SnippetService ) { }

  snippets = new Subject <string[]> ;


/*   @Input()
  search1 : Body = {
    text : "",
    paraphrases_num : 125,
    diverse : "True",
    top_k: 80,
    top_p: 0.92,
    temperature: 1.6
  };
 */
  /* body : Body = {
    text : "",
    paraphrases_num : 77,
    diverse : "True",
    top_k: 80,
    top_p: 0.92,
    temperature: 1.6
  }; */

  bodySrc : BodySrc = {
    query : "",
    index : "kuka",
  };

  @Input()
  search : string = '';
 
       
  ngOnChanges (changes: SimpleChanges): void {
    this.bodySrc.query = this.search;  
    console.log ("OnChanges basic-table 3: ", this.bodySrc );
    this.snippetService.postQuestion1 ( this.bodySrc ).subscribe((result) => {
      console.log ("result", result);
      this.snippets.next (result.results)
    });
    console.log ("OnChanges this.snippet: ", this.snippets);
  } 

  ngOnInit(): void {
    console.log ("OnInit")
  }
  displayedColumns: string[] = ['results'];
  
}
