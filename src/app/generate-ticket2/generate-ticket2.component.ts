import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-generate-ticket2',
  templateUrl: './generate-ticket2.component.html',
  styleUrls: ['./generate-ticket2.component.css']
})
export class GenerateTicket2Component {
    signupForm: FormGroup;

    constructor(private builder: FormBuilder) {
        this.signupForm = this.builder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])] ,
        });}

    submit(value:any) {
        console.log(this.signupForm.value);
    }

}
