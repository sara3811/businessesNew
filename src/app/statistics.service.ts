import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiUri1 = '/services';
  apiUri='/generalStatisticts'
  avgForServices;

  constructor(private http: HttpClient) { }

  getAvgWaitingPerDay(businessId): Observable<any> {
    return this.http.get(environment.apiUrl + this.apiUri + "/" + businessId);
}

getGeneralInformation(): Observable<any> {
  return this.http.get(environment.apiUrl + this.apiUri);
}

getServicesInformation(businessId): Observable<any> {
  return this.http.get(environment.apiUrl + this.apiUri1+ "/" + businessId);

  }
}
