import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload1',
  templateUrl: './upload1.component.html',
  styleUrls: ['./upload1.component.css']
})
export class Upload1Component implements OnInit {
  imageName: any;
  fileToUpload: File = null;
  imageUrl: string;
  imageToShow: any;
  isImageLoading: boolean;

  constructor(private service: EmpService) {}

ngOnInit() {
  this.imageName = 'download.jpg';
  this.getImageFromService();
}


createImageFromBlob(image: Blob) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
   }, false);
  console.log('Inside Image from blob:', this.imageToShow);
  if (image) {
    reader.readAsDataURL(image);
    }
}

getImageFromService() {
  this.isImageLoading = true;
  this.service.getImage().subscribe(data => {
    console.log('Inside Subscribe', data);
    this.createImageFromBlob(data);
    this.isImageLoading = false;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
}
}
