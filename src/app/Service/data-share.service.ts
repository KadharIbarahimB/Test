import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

 
  public sidebar:any=""
  public CompanyName:any=""
  public Industry:any=""
  public TaxId:any=""
  public CompanyId:any=""
  public WebsiteUrl:any=""
  public active:any=""
  public addressline1:any=""
  public addressline2:any=""
  public city:any=""
  public state:any=""
  public country:any=""
  public pincode:any=""
  public Name:any=""
  public phonenumber:any=""
  public email:any=""
  public AName:any=""
  public Aphonenumber:any=""
  public Aemail:any=""
  public image:any=""
  public Date:any=""
  public Time:any=""
  public Displayname:any=""
  public country2:any=""
   public TimeFormate:any=""
   public language:any=""
   public arabic:any=""
   public Paddressline1:any=""
   public Paddressline2:any=""
   public Pcity:any=""
   public Pstate:any=""
   public Pcountry:any=""
   public Ppincode:any=""
   

   private activeSectionIndexSubject = new BehaviorSubject<number>(1);
   activeSectionIndex$: Observable<number> = this.activeSectionIndexSubject.asObservable();
 
   setActiveSection(sectionIndex: number) {
     this.activeSectionIndexSubject.next(sectionIndex);
   }
   private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();

  setActiveStep(step: number) {
    this.activeStepSubject.next(step);
  }
  constructor(private httpClient: HttpClient) { }

  postDataToApi(data: any): Observable<any> {
    const apiUrl = 'https://company.dev.zoolwork.com/api/company/companies';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'RequestVerificationToken': 'CfDJ8KMJIXJTPMVIiMLOI-Iy09Kh3xLbnTwPsGVbyVlOOX4GpDYXKvPSifmAKMxM-CN15yvDBc2zrPtl3yHJzdHu4dVAn2rSynClQNK9nMH3DOdXp6Pbel9FKgWsI4ORMRyHCKfN0wa-GLk5anyIOcwVoRQ', 
    });

    return this.httpClient.post(apiUrl, data, { headers });
  }
  
  
}
