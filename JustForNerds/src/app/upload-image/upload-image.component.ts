import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']

})
export class UploadImageComponent implements OnInit {
  imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader;
  constructor(private service: EmpService) {
    this.imageUrl = '/assets/default-image.jpg';
  }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    this.reader = new FileReader();
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    this.reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(imageForm: any) {
   this.service.postFile(imageForm, this.fileToUpload).subscribe(
     data => {
       console.log('done');
       // Caption.value = null;
       // Image.value = null;
       this.imageUrl = '/assets/default.jpg';
     }
   );
  }
}
