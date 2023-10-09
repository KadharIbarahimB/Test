import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { DataShareService } from '../Service/data-share.service';
import { Router } from '@angular/router';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [MessageService]
})
export class AddressInfoComponent {
  addaddress:boolean=false
  selectedadress:any
  public address!:FormGroup
  show:boolean=false
constructor(private formBuilder : FormBuilder,public datashare:DataShareService,private router:Router,private messageService: MessageService){
  

  this.address = this.formBuilder.group({
    addressline1 :[this.datashare.addressline1, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-,.#]+$/)]],
    addressline2: [this.datashare.addressline2, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-,.#]+$/)]],
    city:[this.datashare.city, [Validators.required, Validators.pattern(/^[A-Za-z\s\-',.]+$/)]],
    state:[this.datashare.state, [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/u
    )]],
    country:[this.datashare.country, [Validators.required, Validators.pattern(/^[A-Za-z\s\-']+$/u
    )]],
    pincode:[this.datashare.pincode, [Validators.required, Validators.pattern(/^\d{6}$/
    )]],
    Paddressline1 :[this.datashare.addressline1, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-,.#]+$/)]],
    Paddressline2: [this.datashare.addressline2, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-,.#]+$/)]],
    Pcity:[this.datashare.city, [Validators.required, Validators.pattern(/^[A-Za-z\s\-',.]+$/)]],
    Pstate:[this.datashare.state, [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/u
    )]],
    Pcountry:[this.datashare.country, [Validators.required, Validators.pattern(/^[A-Za-z\s\-']+$/u
    )]],
    Ppincode:[this.datashare.pincode, [Validators.required, Validators.pattern(/^\d{5}$/
    )]],
})
}
cities: City[] = [
  { name: 'Permanent', code: '1' },
  { name: 'Registered', code: '2' },
  { name: 'Billing', code: '3' }
];

selectedCities: City[] = [];

isCitySelected(cityCode: string): boolean {
 
  return this.selectedCities.some(city => city.code === cityCode);
  
}
    
NewAddress(){
  this.addaddress=!this.addaddress
 }
 removeCity(cityCode: string) {
  // Remove the city from the selectedCities array based on its code
  this.selectedCities = this.selectedCities.filter(city => city.code !== cityCode);
}

next(){
if((this.address.value.addressline1=="")||(this.address.value.addressline2=="")||(this.address.value.city=="")||
(this.address.value.state=="")||(this.address.value.country=="")||(this.address.value.pincode==""))
{   
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'you must provide the following fields before continuing' });
}
else
{
  this.datashare.addressline1=this.address.value.addressline1
  this.datashare.addressline2=this.address.value.addressline2
  this.datashare.city=this.address.value.city
  this.datashare.state=this.address.value.state
  this.datashare.country=this.address.value.country
  this.datashare.pincode=this.address.value.pincode
  this.datashare.Paddressline1=this.address.value.Paddressline1
  this.datashare.Paddressline2=this.address.value.Paddressline2
  this.datashare.Pcity=this.address.value.Pcity
  this.datashare.Pstate=this.address.value.Pstate
  this.datashare.Pcountry=this.address.value.Pcountry
  this.datashare.Ppincode=this.address.value.Ppincode
  this.datashare.setActiveSection(3);
  this.router.navigate(['contact'])
}
}

pre(){
  
  this.router.navigate(['BasicInfo'])
  this.datashare.setActiveSection(1);
}
latitude: any;
longitude: any;

getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitudeInput = document.getElementById('latitude') as HTMLInputElement;
        const longitudeInput = document.getElementById('longitude') as HTMLInputElement;

        if (latitudeInput && longitudeInput) {
          latitudeInput.value = position.coords.latitude.toString();
          longitudeInput.value = position.coords.longitude.toString();
        }
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }

}
ngAfterViewInit() {
  const getLocationButton = document.getElementById('get-location');

  if (getLocationButton) {
    getLocationButton.addEventListener('click', (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Call your getlocation() function to get the location
      this.getlocation();
    });
  }
}

}
