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

    formGrp: FormGroup;


    constructor(formBuilder: FormBuilder) {
        this.formGrp = formBuilder.group({
            emailctrl: ['', [Validators.required, Validators.email]]
        })
    }

    get emailid(){
        return this.formGrp.controls;
    }

    doSubmit() {
        console.log(this.formGrp.value);
    }

}
