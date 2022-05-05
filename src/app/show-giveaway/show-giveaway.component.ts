import { Component } from '@angular/core';
import { LoadScriptsService} from '../load-scripts.service';
@Component({
  selector: 'app-show-giveaway',
  templateUrl: './show-giveaway.component.html',
  styleUrls: ['./show-giveaway.component.css']
})
export class ShowGiveawayComponent{
    constructor (private _LoadScripts: LoadScriptsService) {
        _LoadScripts.Load(["giveaway_script"]);
    }



}
