import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  private baseUrl = 'https://company.dev.zoolwork.com/api/company/companies/companyList';

  constructor(private http: HttpClient) {}
//To get api and show company list
  getCompanyList(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'text/plain',
      'Authorization': `Bearer ${token}`,
      'RequestVerificationToken': 'CfDJ8KMJIXJTPMVIiMLOI-Iy09IXBHDfQeTM8oh99uqqO6A4TPa_0O0V0aygvY1ehT1S8ffPQ05hWBFLwd07JR4eAduBP406_4wA9NRzcfGpw1CC4oPEXbmsDxbyr93iGzlDdCwuiogomDxPzeazP2X_yrJBblyLzpmzVdUZiy_p-SkKG28yyYX58piax2fkS6y-Cw' // Replace with your actual CSRF token
    });

    return this.http.get(this.baseUrl, { headers });
  }
}
