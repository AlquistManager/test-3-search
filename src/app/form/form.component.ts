import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  {
  topK : number | null | undefined = 1;
  topP : number | null | undefined = 1;
  sent : number | null | undefined = 1;
  temp : number | null | undefined = 1;
  value : number = 20;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = false;
  name = 0;
}
