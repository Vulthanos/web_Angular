import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/interfaces/shippping&payment.interface';
import { TutorialService } from 'src/app/services/tutorial.service';
import {LoadScriptsService} from "../services/load-scripts.service";

@Component({
  selector: 'app-credit-card-shipping',
  templateUrl: './credit-card-shipping.component.html',
  styleUrls: ['./credit-card-shipping.component.css']
})
export class CreditCardShippingComponent implements OnInit {
    tutorial: Tutorial = new Tutorial();
    submitted = false;

    constructor(private tutorialService: TutorialService, private loadScriptsService: LoadScriptsService) {
        loadScriptsService.Load(["CreditCardAnimation","FormValidation"])
    }

    ngOnInit(): void {
    }

    saveTutorial(): void {
        this.tutorialService.create(this.tutorial).then(() => {
            console.log('Created new item successfully!');
            this.submitted = true;
        });
    }

    newTutorial(): void {
        this.submitted = false;
        this.tutorial = new Tutorial();
    }

}


