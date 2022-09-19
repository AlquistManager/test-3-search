import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { Body } from '../snippet';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl(''); 
  searchPrompt : string |null = ""; 
  
  sent : number | null | undefined = 10;
  topK : number | null | undefined = 80;
  topP : number | null | undefined = 0.92;
  temp : number | null | undefined = 1.6;

  search() {
    this.searchPrompt = this.name.value;
  }

}
