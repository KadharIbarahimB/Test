import { Component } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../Service/data-share.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:[MessageService]
})

export class DisplayComponent {
  Date: any[] | undefined;
  countries2: any[] | undefined;
  Time: any[] | undefined;
public display!: FormGroup
ingredient!:any
constructor(private fb: FormBuilder,private router: Router,public datashare:DataShareService,public messageService:MessageService) {
  this.datashare.active=4
  this.Date = [
    { name: 'DD/MM/YY', code: '1' },
    { name: 'YY/MM/DD', code: '2' },
    { name: 'MM/DD/YY', code: '3' },
   
  ];
  this.countries2 = [
    { name: 'India', code: 'IN' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
   
  ];
  this.Time = [
    { name: 'America/New_York', code: '1' },
    { name: 'America/Los_Angeles', code: '2' },
    {name:'UTC', code:'4'}
    
   
  ];
  this.display = this.fb.group({
    Date: new FormControl(this.datashare.Date),
    country2: new FormControl(this.datashare.country2), 
    Time: new FormControl(this.datashare.Time), 
    Displayname:[this.datashare.Displayname]
  });
}

next(){
  if((this.display.value.Date=="")||(this.display.value.country2=="")||
  (this.display.value.Time=="")||(this.display.value.Displayname==""))
  {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'you must provide the following fields before continuing' });
  
   
  
      
  }
  else{
   
    
    this.datashare.Date=this.display.value.Date
    this.datashare.country2=this.display.value.country2
    this.datashare.Time=this.display.value.Time
    this.datashare.Displayname=this.display.value.Displayname
    this.datashare.setActiveSection(5);
 
  this.router.navigate(['review']);
  
  
  
  }
  }
  pre(){
  
    this.router.navigate(['contact'])
    this.datashare.setActiveSection(3);
  }
}
