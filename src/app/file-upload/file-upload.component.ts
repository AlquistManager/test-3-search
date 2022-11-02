import { ɵNoopAnimationStyleNormalizer } from '@angular/animations/browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  fileName = '';
  srchUrl : string = 'https://manual-search-develop.alquist.ai/upload/kuka';  // upload file URL to search  api
  headerOptions : string = "Content-Type: multipart/form-data"

  constructor(private http: HttpClient) {}

  onFileSelected(event:Event) {
    const target = event.target as HTMLInputElement;
    const file:File = target.files[0];

      if (file) {

          this.fileName = file.name;
          console.log ("file name  " + this.fileName)
          const formData = new FormData();
          console.log ("file name  ")

          formData.append("file", file); 

          const upload$ = this.http.post(this.srchUrl,formData);
          console.log ("file name  ", upload$)

          upload$.subscribe();
      }
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  };
}