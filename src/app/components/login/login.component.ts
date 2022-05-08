import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) {
      _LoadScripts.LoadModules(["login_script"])
  }

  ngOnInit(): void {
  }

}
