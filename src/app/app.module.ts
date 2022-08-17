import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PromptComponent } from './prompt/prompt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { ReplyComponent } from './reply/reply.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {MatTableModule} from '@angular/material/table';
import { BasicTableComponent } from './basic-table/basic-table.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PromptComponent,
    ReplyComponent,
    BasicTableComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
