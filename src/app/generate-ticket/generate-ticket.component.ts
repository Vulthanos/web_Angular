import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent {
    ngOptions = [1,2,3]
    ngDropdown = 1;
    signupForm: FormGroup;

    constructor(private builder: FormBuilder) {
        this.signupForm = this.builder.group({
            identidad: ['', Validators.required] ,
            email: ['', Validators.compose([Validators.required, Validators.email])] ,
        });
    }

    submit(value:any) {
        console.log(this.signupForm.value);
    }

}
