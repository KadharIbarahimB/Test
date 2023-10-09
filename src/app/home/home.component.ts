import { Component } from '@angular/core';
import { DataShareService } from '../Service/data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  constructor(public datashare:DataShareService){}
  
  
}
