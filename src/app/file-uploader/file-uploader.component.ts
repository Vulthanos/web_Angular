import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
    constructor( private fireStorage: AngularFireStorage) { }

    basePath = '/images';
    downloadableURL = '';
    task: AngularFireUploadTask;

    progressValue: Observable<number>;

    ngOnInit(): void {
    }

    async onFileChanged(event) {
        const file = event.target.files[0];
        if (file) {
            const filePath = `${this.basePath}/${file.name}`;
            this.task =  this.fireStorage.upload(filePath, file);


            this.progressValue = this.task.percentageChanges();


            (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });


        } else {
            alert('No images selected');
            this.downloadableURL = ''; }



    }

}
