import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../services/load-scripts.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) {
      _LoadScripts.Load(["singup_script"]);
  }

  ngOnInit(): void {
  }

}
