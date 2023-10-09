import { Component } from '@angular/core';
import { DataShareService } from '../Service/data-share.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  TimeFormate: string = "12 - Hour(s)";
  constructor(private datashare:DataShareService){
   
    
  }
  onTimeFormatChange() {
    this.datashare.TimeFormate=this.TimeFormate
    console.log(this.datashare.TimeFormate)
  }
  
}
