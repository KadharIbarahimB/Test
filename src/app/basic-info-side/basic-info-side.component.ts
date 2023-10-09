import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../Service/data-share.service';

@Component({
  selector: 'app-basic-info-side',
  templateUrl: './basic-info-side.component.html',
  styleUrls: ['./basic-info-side.component.css']
})
export class BasicInfoSideComponent {

  activeSectionIndex: any;
 

  constructor(private router: Router,private datashare:DataShareService) {
 //this get value from other component when click next and show that current active section
    this.datashare.activeSectionIndex$.subscribe(index => {
      this.activeSectionIndex = index;
    });
    
  }
  ngOnInit() {
    // Initialize the active section index
    this.activeSectionIndex = 1;
  }
  setActiveSection(sectionIndex: number) {
    this.datashare.setActiveSection(sectionIndex);
    this.activeSectionIndex = sectionIndex;

    // Define a mapping from section index to route path
    const sectionToRouteMap: { [key: number]: string } = 
    {
      1: 'basic-info',
      2: 'address-info',
      3: 'contact-details',
      4: 'display',
      5: 'review'
    };

    
    const routePath = sectionToRouteMap[sectionIndex];

    if (routePath=='basic-info') {
      this.router.navigate(['BasicInfo']);
      
    }
    else if(routePath=='address-info'){
      this.router.navigate(['addressInfo']);
     
    }
  
    else if(routePath=='contact-details'){
      this.router.navigate(['contact']);
    }
    else if(routePath=='display'){
      this.router.navigate(['display']);
    }
    else if(routePath=='review'){
      this.router.navigate(['review']);
    }
  }
}
