import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CompanyDataService } from '../Service/company-data.service';
import { DataShareService } from '../Service/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  CompanyList:any
  loading: boolean = true; 

  constructor(private http : HttpClient,private CompanyDataService:CompanyDataService,private DataShareService:DataShareService,private router: Router)
  {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNCNzZCNzdCRDc2NUE4Rjg0QzRGRTVCMDc5Rjk3OEQ2NDhFRDZDOEVSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6Ik8zYTNlOWRscVBoTVQtV3dlZmw0MWtqdGJJNCJ9.eyJuYmYiOjE2OTUzNjI4OTksImV4cCI6MTcyNjg5ODg5OSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmRldi56b29sd29yay5jb20iLCJhdWQiOiJDb21wYW55U3ZjIiwiY2xpZW50X2lkIjoiV2ViR2F0ZXdheV9Td2FnZ2VyIiwic3ViIjoiM2EwZDEwMGItMjA4Yi1jOTQ2LTliMzAtYTNhYjM3MWEyZTU1IiwiYXV0aF90aW1lIjoxNjk1MzYyODk4LCJpZHAiOiJsb2NhbCIsInRlbmFudGlkIjoiM2EwZDEwMGItMWY4MC03ZmZhLWRkMDItOGY3NjAyYmYzOTRhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiYWRtaW4iLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJGYWxzZSIsImVtYWlsIjoiYWRtaW5AbWFzY2MuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJGYWxzZSIsIm5hbWUiOiJhZG1pbiIsInNpZCI6IjM1OTNEMjg5OEYyMERCMDRFNzk2QjhBNTQ2RDRGMjdBIiwiaWF0IjoxNjk1MzYyODk5LCJzY29wZSI6WyJDb21wYW55U3ZjIl0sImFtciI6WyJwd2QiXX0.ixNPuEDuj71jwxK9BZdwqsQh7uysCdZBLDMYUKb2jltNCATzhHqxnj3Oz04lmxI3hGrUbLuoZMAXtzT1egD2v9f3UigzHjR6TujmE3Ki3ewARhnTgrewa6uunDcaIazPujJm38vZMEx6OrGAVPjX4OFPirM2hpCJzJXwKuWrkz80sQxae-oKaxjhNsUTrWPK48_9EAfBlcpDXxzFoxWvBqLzOX4jLIAxw5YDP2UavzlQvbON4nKbBLzlYFlNOzepPTORpmM3-npm-U3OrEfWEX1g-Y9-kpkI-uwSw6hFZWHfFJJhr6fa-QRw67_1DXHQHeC71NHklHTclk6kaSDLIr34HdOaIMZz4SkDUa2ceA__55s7ZSfw6SFY3H8A2TFWUGTiBqf52e9XOttfSJ9mUsU41cKC-5CJ8RsmNse4m-HH5rZWajuwX0fOkHfVrW3rIZIVEm5lYPCbZrLHJN4BtrgzOx8LIEpmC8dUykV-A9fqjbvRlaFS9k6L2vjJH2sOVnxiXr-ymDWwDVRJB_EUkWRy_8cUgxGifFep8wPE6SVOadGBgBg_uIge7UVHwOomn2V5hhHPGGP7YhtNUeKegtFOtkfawwPvXQ0osU9f13M_khj7u3ahujuYNpW5Oi4ZI9232p_12Y_oyq7iD3jjofaNO-IYA5O5_5SCknZDjuI'; 
  
    this.CompanyDataService.getCompanyList(token).subscribe((res)=>{this.CompanyList=res; this.loading = false;});
 
    this.CompanyDataService.getCompanyList(token).subscribe(res=>{console.log(this.CompanyList)}); 
 
  
    // console.log(this.DataShareService.test)
}
addcompany(){
  this.router.navigate(['addcompany'])
}

}



