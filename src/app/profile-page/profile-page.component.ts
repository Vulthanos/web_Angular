import { Component, OnInit } from '@angular/core';
import { LoadScriptsService} from '../services/load-scripts.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor (private loadScript: LoadScriptsService) {
    this.loadScript.LoadModules(["logout"]);

  }

  ngOnInit(): void {
  }

}
