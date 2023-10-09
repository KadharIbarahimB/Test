import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';
import { LeaveTrackerComponent } from './leave-tracker/leave-tracker.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { BasicInfoMainComponent } from './basic-info-main/basic-info-main.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Dashboard',component:DashboardComponent },
  {path:'employee',component:EmployeeComponent},
  {path:'leaveTracker',component:LeaveTrackerComponent},
  {path:'timeTracker',component:TimeTrackerComponent},
  {path:'setting',component:SettingComponent},
  {path:'userList',component:UserListComponent }, 
  {path:'addcompany',component:AddCompanyComponent},
  {path:'BasicInfo',component:BasicInfoMainComponent},
  {path:'addressInfo',component:AddressInfoComponent},
  {path:'review',component:ReviewPageComponent},
  {path:'contact',component:ContactComponent},
  {path:'display',component:DisplayComponent}

];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
