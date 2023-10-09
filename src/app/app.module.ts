import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';
import { UserPhotoComponent } from './user-photo/user-photo.component';
import { NotificationComponent } from './notification/notification.component';
import { LanguageComponent } from './language/language.component';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import{HttpClientModule}from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveTrackerComponent } from './leave-tracker/leave-tracker.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { SettingComponent } from './setting/setting.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AddCompanyComponent } from './add-company/add-company.component';
import { BasicInfoSideComponent } from './basic-info-side/basic-info-side.component';
import { TimelineModule } from 'primeng/timeline';

import { BasicInfoMainComponent } from './basic-info-main/basic-info-main.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';
import { AddCompanyNavComponent } from './add-company-nav/add-company-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from "primeng/message";
import { SlecteLanguageComponent } from './slecte-language/slecte-language.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayComponent } from './display/display.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { ListboxModule } from 'primeng/listbox';
// import{RadioButtonGroupDemo} from 'primeng/radiobuttongroupdemo'
// import { SpeedDialModule } from 'primeng/speeddial';
// import { SpeedDialCustomDemo } from 'src/app/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompanyLogoComponent,
    UserPhotoComponent,
    NotificationComponent,
    LanguageComponent,
    SideBarComponent,
    UserListComponent,
    SideNavComponent,
    HomeComponent,
    DashboardComponent,
    EmployeeComponent,
    LeaveTrackerComponent,
    TimeTrackerComponent,
    SettingComponent,
    AddCompanyComponent,
    BasicInfoSideComponent,
  
    BasicInfoMainComponent,
    AddCompanyNavComponent,
    TestComponent,
    SlecteLanguageComponent,
    AddressInfoComponent,
    ReviewPageComponent,
    MainPageComponent,
    ContactComponent,
    DisplayComponent,
    RadioButtonComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    FormsModule, 
    SplitButtonModule,
    ProgressSpinnerModule,
    TimelineModule,
    FileUploadModule,
    ChipsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
  ReactiveFormsModule,
  StepsModule,
  MessagesModule,
  ToastModule,
  MessageModule,
  RadioButtonModule,
ListboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
