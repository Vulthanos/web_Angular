import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.component.html',
  styleUrls: ['./giveaway.component.css']
})
export class GiveawayComponent{
  signupForm: FormGroup;


  constructor(private builder: FormBuilder) {
    this.signupForm = this.builder.group({
      nombre: ['', Validators.required] ,
      apellido: ['', Validators.required] ,
      email: ['', Validators.compose([Validators.required, Validators.email])] ,
    });
  }

  submit(value:any) {
    console.log(this.signupForm.value);
  }

}
