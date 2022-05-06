import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../services/load-scripts.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) {
      _LoadScripts.Load(["search_result"]);
  }

  ngOnInit(): void {
  }

}
