import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup ,Validators,FormArray,FormControl} from '@angular/forms';
import { DataShareService } from '../Service/data-share.service';
import { Router } from '@angular/router';

interface Industry {
  name: string,
  code: string
}

@Component({
  selector: 'app-basic-info-main',
  templateUrl: './basic-info-main.component.html',
  styleUrls: ['./basic-info-main.component.css','./basic-info-main.component.scss'],
  providers: [MessageService]
})
export class BasicInfoMainComponent  {
  
 
  Industries: Industry[] | undefined;
  SelectedIndustry: Industry | undefined;
  selectedLanguages1: any

  public CompanyDetails!: FormGroup;
  Languages = [
    { name: 'Arabic', code: 'Ar' },
    { name: 'Hindi', code: 'hi' }
  ];

  show: boolean = true;
  languageInputsArray!: FormArray;
  activeStep: any;
  constructor(private messageService: MessageService,private formBuilder : FormBuilder,public datashare:DataShareService,private router:Router) 
  {     
    this.datashare.activeStep$.subscribe(step => {
      this.activeStep = step;
    });
    
    this.Industries = [
      { name: 'Food industry', code: '1' },
      { name: 'Construction', code: '2' },
      { name: 'Manufacturing', code: '3' },
     
  ];
  this.CompanyDetails = this.formBuilder.group({
    CompanyName :[this.datashare.CompanyName, [Validators.required, Validators.minLength(3)]],
    WebsiteURL: [this.datashare.WebsiteUrl, [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[A-Za-z0-9-]+\.[A-Za-z0-9]+[\/#?]?.*$/i
    )]],
    TaxID:[this.datashare.TaxId, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{10}$/)]],
    CompanyID:[this.datashare.CompanyId, [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
    // Language:[''],
    industry:[this.datashare.Industry, [Validators.required]],
    Language: new FormControl(this.datashare.language), 
        languageInputs: this.formBuilder.array([this.datashare.arabic]) ,
        
       
})
this.languageInputsArray = this.CompanyDetails.get('languageInputs') as FormArray;

  }
 

    
      
     
    

  onLanguageChange(selectedLanguages: any[]) {
    const languageInputsArray = this.CompanyDetails.get('languageInputs') as FormArray;
    
       while (this.languageInputsArray.length) {
      this.languageInputsArray.removeAt(0);
    }

    // Add dynamic inputs with validators
    selectedLanguages.forEach(() => {
      // Add required validator and other validators as needed
      this.languageInputsArray.push(this.formBuilder.control('', [Validators.required, Validators.pattern(/[\u0600-\u06FF]+/)]));
    });
    this.selectedLanguages1=selectedLanguages
  }
  getDynamicInputValues() {
    const inputValues: any[] = [];
    const languageInputsArray = this.CompanyDetails.get('languageInputs') as FormArray;

    for (let i = 0; i < languageInputsArray.length; i++) {
      const inputValue = languageInputsArray.at(i).value;
      inputValues.push(inputValue);
      
    }
    this.datashare.arabic=inputValues
    // Now, inputValues will contain the values of the dynamic input fields
   
  }

next(){
if((this.CompanyDetails.value.CompanyName=="")||(this.CompanyDetails.value.WebsiteUrl=="")||
(this.CompanyDetails.value.TaxID=="")||(this.CompanyDetails.value.CompanyID=="")||
(this.CompanyDetails.value.industry==""))
{
  

  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'you must provide the following fields before continuing' });
  console.log(this.selectedLanguages1)

  
}
else{
 
  
  this.datashare.CompanyName=this.CompanyDetails.value.CompanyName
  this.datashare.CompanyId=this.CompanyDetails.value.CompanyID
  this.datashare.Industry=this.CompanyDetails.value.industry
  this.datashare.TaxId=this.CompanyDetails.value.TaxID
  this.datashare.WebsiteUrl=this.CompanyDetails.value.WebsiteURL
  this.datashare.image=this.imageUrl2;
  this.datashare.language=this.selectedLanguages1;
 
  this.getDynamicInputValues();
 
  this.datashare.setActiveSection(2);

this.router.navigate(['addressInfo']);



}
}
imageUrl2: string | ArrayBuffer | null = null;
maxFileSize= 1024 * 1024;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= this.maxFileSize) {
        this.previewImage(file);
        this.messageService.add({  severity: 'success', summary: 'Success', detail: 'File successfully uploaded' });
        this.datashare.image=this.imageUrl2
       
      } else {
 
        this.messageService.add({  severity: 'error', summary: 'Error', detail: 'File size exceeds the 1MB limit' });
      }
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl2 = reader.result;
    };
  }
  


}
