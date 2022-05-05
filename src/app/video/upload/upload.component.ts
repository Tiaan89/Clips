import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  isDragover = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  storeFile($event: Event) {
    this.isDragover = false
  }

}
