import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { DataShareService } from '../Service/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[MessageService]
})
export class ContactComponent {
  public contact!:FormGroup
  constructor(private formBuilder: FormBuilder ,public datashare:DataShareService,private router:Router,private messageService: MessageService){
    this.datashare.active=3
    this.contact = this.formBuilder.group({
      Name :[this.datashare.Name, [Validators.required, Validators.minLength(5)]],
      phonenumber: [this.datashare.Aphonenumber, [Validators.required, Validators.pattern(/^\+?[0-9\s-]+$/
      )]],
      email:[this.datashare.email, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      AName:[this.datashare.AName, [Validators.required, Validators.minLength(5)]],
      Aphonenumber:[this.datashare.Aphonenumber, [Validators.required, Validators.pattern(/^\+?[0-9\s-]+$/
      )]],
      Aemail:[this.datashare.Aemail, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
  })
  }
 
next(){
  if((this.contact.value.Name=="")||(this.contact.value.phonenumber=="")||
  (this.contact.value.email=="")||(this.contact.value.AName=="")||
  (this.contact.value.Aphonenumber=="")||(this.contact.value.Aemail==""))
  {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'you must provide the following fields before continuing' });
  }
  else{
   
    this.datashare.Name=this.contact.value.Name
    this.datashare.phonenumber=this.contact.value.phonenumber
    this.datashare.email=this.contact.value.email
    this.datashare.AName=this.contact.value.AName
    this.datashare.Aphonenumber=this.contact.value.Aphonenumber
    this.datashare.Aemail=this.contact.value.Aemail
    this.datashare.setActiveSection(4);
  this.router.navigate(['display']);
  
  
  
  }
}
pre(){
  
  this.router.navigate(['addressInfo'])
  this.datashare.setActiveSection(2);
}
}
