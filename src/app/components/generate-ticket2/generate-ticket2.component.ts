import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Component({
    selector: 'app-generate-ticket2',
    templateUrl: './generate-ticket2.component.html',
    styleUrls: ['./generate-ticket2.component.css']
})
export class GenerateTicket2Component {

    signupForm: FormGroup;

    constructor(private builder: FormBuilder,  private fireStorage: AngularFireStorage) {
        this.signupForm = this.builder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
    }

    submit(value:any) {
        console.log(this.signupForm.value);
    }

    basePath = '/tickets';
    downloadableURL = '';
    task: AngularFireUploadTask;

    progressValue: Observable<number>;

    ngOnInit(): void {
    }

    async onFileChanged(event) {
        const file = event.target.files[0];
        if (file) {
            const filePath = `${this.basePath}/${file.name}`;
            this.task = this.fireStorage.upload(filePath, file);


            this.progressValue = this.task.percentageChanges();


            (await this.task).ref.getDownloadURL().then(url => {
                this.downloadableURL = url;
            });


        } else {
            alert('No images selected');
            this.downloadableURL = '';
        }
    }

}

