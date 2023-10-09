import { Component } from '@angular/core';
import { DataShareService } from '../Service/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {
  today: Date;

  constructor(public datashare: DataShareService, public router: Router) {
    this.today = new Date();
  }

  pre() {
    this.navigateTo('display', 4);
  }
//this is to route to the edit page
  edit(x: number) {
    const routes = ['BasicInfo', 'addressInfo', 'contact', 'display'];
    if (x >= 1 && x <= routes.length) {
      this.navigateTo(routes[x - 1], x);
    }
  }
  private navigateTo(route: string, section: number) {
    this.router.navigate([route]);
    this.datashare.setActiveSection(section);
  }
//This function to post data to api
  sendDataToApi() {
    const dataToSend = {
      basicDetails: {
        logo: this.datashare.image,
        companyName: {
          additionalProp1: { name: this.datashare.CompanyName }
        },
        companyTaxID: this.datashare.TaxId,
        webSiteUrl: this.datashare.WebsiteUrl
      }
    };

    this.datashare.postDataToApi(dataToSend).subscribe(
      (response) => console.log('API response:', response),
      (error) => console.error('API error:', error)
    );
  }

 
}
