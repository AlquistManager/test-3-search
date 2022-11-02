import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormComponent } from './form/form.component';
import { PromptComponent } from './prompt/prompt.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'prompt', component: PromptComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
