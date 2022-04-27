import { Component } from '@angular/core';
import { LoadScriptsService } from "./load-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _LoadScripts:LoadScriptsService) {
        _LoadScripts.LoadUrl(["https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js", "https://code.jquery.com/jquery-3.6.0.js"]);
        _LoadScripts.LoadLinks(["https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css", "https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css", "https://fonts.googleapis.com/icon?family=Material+Icons"])
    }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
