import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {DataApiServicesService} from './Servisess/data-service';
import { AgGridModule } from 'ag-grid-angular';
import {RouterModule,Routes} from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {DataExportServiceToExelService} from '../app/Servisess/dataExportToExcel/data-export-service-to-exel.service'
import { DataExportintoGridComponent } from './data-exportinto-grid/data-exportinto-grid.component';
import { MasterDetailGridComponent } from './master-detail-grid/master-detail-grid.component';


const route: Routes =[{path:'master-details',component:MasterDetailGridComponent},
{path:'Data-Export-GridComponent',component:DataExportintoGridComponent}]



@NgModule({
  declarations: [
    AppComponent,
    DataExportintoGridComponent,
    MasterDetailGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatButtonModule
   
  ],
  providers: [DataApiServicesService,DataExportServiceToExelService],
  bootstrap: [AppComponent]
})
export class AppModule { }