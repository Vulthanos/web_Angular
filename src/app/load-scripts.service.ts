import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

    constructor() { }

    Load(archivos:string[]) {
        for ( let archivo of archivos ) {
            let script = document.createElement('script');
            script.src = "./assets/JS_Files/" + archivo + ".js";
            script.type = 'text/javascript';
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(script);
        }
    }
}