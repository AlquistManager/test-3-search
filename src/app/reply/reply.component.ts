import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/* import { Snippet } from '../snippet'; */
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  
/*   snippets: Observable<Snippet[]> | undefined ;
  
  constructor( private snippetService: SnippetService ) { }

  @Input()
  search : string = '';
 */
  ngOnInit(): void {
   /*   console.log ("ngOnInit reply: ", this.search);
   this.snippets = this.snippetService.getSnippets() */
  }  

}
/**
 * (this.search
 * 
 * snippet: Snippet = {
    id: 1,
    question: "how is it going",
    country: "USA",
    year: 1990,
    confidence: 0.99,
    result: "gopd idea"
  }
 */