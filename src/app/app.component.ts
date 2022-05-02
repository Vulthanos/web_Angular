import { Component } from '@angular/core';
import { LoadScriptsService } from "./load-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _LoadScripts:LoadScriptsService) {
        _LoadScripts.LoadUrl(["https://code.jquery.com/jquery-3.6.0.js"]);
        _LoadScripts.LoadLinks(["https://fonts.googleapis.com/icon?family=Material+Icons"]);
    }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
