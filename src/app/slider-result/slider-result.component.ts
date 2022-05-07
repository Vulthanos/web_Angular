import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../services/load-scripts.service';

@Component({
  selector: 'app-slider-result',
  templateUrl: './slider-result.component.html',
  styleUrls: ['./slider-result.component.css']
})
export class SliderResultComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) {
      _LoadScripts.LoadModules(["slider_result"]);
  }

  ngOnInit(): void {
  }

}
