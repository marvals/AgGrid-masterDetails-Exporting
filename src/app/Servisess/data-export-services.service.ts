import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataExportServicesService {

  constructor(private  http : HttpClient) { }
  private url = "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"


  dataExportServices()
  {
return this.http.get(this.url);

  }


}
