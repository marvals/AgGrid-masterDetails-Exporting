import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataApiServicesService {

  constructor(private  http : HttpClient) { }
private url = "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/simple/data/data.json"

  dataServices()
  {
return this.http.get(this.url);

  }
}
