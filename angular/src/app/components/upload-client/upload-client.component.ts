import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-client',
  templateUrl: './upload-client.component.html',
  styleUrls: ['./upload-client.component.css']
})
export class UploadClientComponent implements OnInit {
  
  uploadedFiles: Array<any> = [];
  hasFile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.hasFile = true;
  }

  onCancelClick() {
    this.uploadedFiles.splice(0, this.uploadedFiles.length);
    this.hasFile = false;
  }

}
