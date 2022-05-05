import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  title = 'Help';

  constructor() { }

  ngOnInit() {
  }

  id:any = '';
  accordion(ids:any){
    if(this.id == ids){
      this.id='';
    }else{
      this.id=ids;
    }
  }

}
