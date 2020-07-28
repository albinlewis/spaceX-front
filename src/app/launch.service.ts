import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }

 // get all latest launches
  public getAllLaunches() {
    return this.http.get('https://api.spacexdata.com/v4/launches/latest');
  }


}
