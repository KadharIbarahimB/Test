import { Component } from '@angular/core';
import {  Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private renderer: Renderer2,private el: ElementRef,private router: Router) {} 
  activeItemId: number =1
  sidebar= 
  [
    {
        "id":1,
        "name":"Dashboar",
      "icon":"pi-home"

    },
    {
        "id":2,
        "name":"Employee",
        "icon":"pi-user"
    },
    {
        "id":3,
        "name":"Leave Tracker",
        "icon":"pi-calendar"
    },
    {
      "id":4,
      "name":"Time Tracker",
      "icon":"pi-clock"
  },
  {
    "id":5,
    "name":"Organizations",
    "icon":"pi-building"
},
{
  "id":6,
  "name":"Setting",
  "icon":"pi-cog"
}
  ]

  change(itemId: number) {
    
    this.activeItemId = itemId;
    if(this.activeItemId===1)
    {
      this.router.navigate(['/Dashboard'])
    }
    else if(this.activeItemId===2){
     this.router.navigate(['employee'])
    }
    else if(this.activeItemId===3){
      this.router.navigate(['leaveTracker'])
    }
    else if(this.activeItemId===4){
      this.router.navigate(['timeTracker'])
    }
    else if(this.activeItemId===5){
      this.router.navigate(['userList'])
    }
    else{
      this.router.navigate(['setting'])
    }
  }
 
 

}

