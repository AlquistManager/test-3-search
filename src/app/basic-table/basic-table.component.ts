/* import { registerLocaleData } from '@angular/common'; */
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RetSnippet, Body } from '../snippet';
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnChanges {

  constructor( private snippetService: SnippetService ) { }

  snippets = new Subject <string[]> ;


  @Input()
  search1 : Body = {
    text : "",
    paraphrases_num : 125,
    diverse : "True",
    top_k: 80,
    top_p: 0.92,
    temperature: 1.6
  };

  body : Body = {
    text : "",
    paraphrases_num : 77,
    diverse : "True",
    top_k: 80,
    top_p: 0.92,
    temperature: 1.6
  };

  @Input()
  search : string = '';
  @Input()
  sentences : number | null | undefined = 0;
  @Input()
  topK : number | null | undefined = 0;
  @Input()
  topP : number | null | undefined = 0;
  @Input()
  temp : number | null | undefined = 0;
       
  ngOnChanges (changes: SimpleChanges): void {
    this.body.text = this.search;  
    this.body.paraphrases_num = this.sentences; 
    this.body.top_k = this.topK; 
    this.body.top_p = this.topP; 
    this.body.temperature = this.temp; 
    console.log ("OnChanges basic-table 3: ", this.body );
    this.snippetService.postQuestion1 ( this.body ).subscribe((result) => {
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
