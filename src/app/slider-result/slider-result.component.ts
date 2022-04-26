import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../load-scripts.service';

@Component({
  selector: 'app-slider-result',
  templateUrl: './slider-result.component.html',
  styleUrls: ['./slider-result.component.css']
})
export class SliderResultComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) {
      _LoadScripts.Load(["slider_result"]);
  }

  ngOnInit(): void {
  }

}