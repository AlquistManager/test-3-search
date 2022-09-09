/* import { registerLocaleData } from '@angular/common'; */
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RetSnippet } from '../snippet';
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
  search : string = '';

  ngOnChanges (changes: SimpleChanges): void {
    console.log ("OnChanges basic-table: ", this.search);
    this.snippetService.postQuestion ( this.search ).subscribe((result) => {
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
