import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../load-scripts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor( private _LoadScripts:LoadScriptsService) {
      _LoadScripts.LoadHead(["glider"]);
      _LoadScripts.Load(["slider"]);
  }

  ngOnInit(): void {
  }

}
