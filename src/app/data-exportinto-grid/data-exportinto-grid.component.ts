import { Component, OnInit } from '@angular/core';
import {DataExportServicesService} from '../Servisess/data-export-services.service';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DataExportServiceToExelService} from '../Servisess/dataExportToExcel/data-export-service-to-exel.service'
//import "ag-grid-enterprise";





@Component({
  selector: 'app-data-exportinto-grid',
  templateUrl: './data-exportinto-grid.component.html',
  styleUrls: ['./data-exportinto-grid.component.css']
})
export class DataExportintoGridComponent implements OnInit {

  title = 'AggGrid';
  private gridApi;
  
  private gridColoumApi;
  //private excelStyles;
  private sortingOrder;
  private rowDatass:any =[];
  
 // private defaultColDef;
  private rowSelection;



  constructor(private dataExportservice : DataExportServicesService , private http :HttpClient,private dataExport :DataExportServiceToExelService){}
  ngOnInit(){

    //this.dataExportservice.dataExportServices().subscribe((Response)=>console.log(Response));
    //console.log(this.arr);
      }

     


      columnDefs = [
       
            {
            
              field: "age",
              editable:true
            },
            {
            
              field: "athlete",
              editable:true
            }
            ,
            {
            
              field: "bronze",
              editable:true
            },
            {
            
              field: "country",
              editable:true
            },
            {
            
              field: "date",
              editable:true
            },
            {
            
              field: "gold",
              editable:true
            },
            {
            
              field: "silver",
              editable:true
            },
            {
            
              field: "sport",
              editable:true
            },
            {
            
              field: "total",
              editable:true
            },
            {
            
              field: "year",
              editable:true
            }
          ];

           excelStyles = [
      {
        id: "age",
        dataType: "number"
      },
      {
        id: "athlete",
        dataType: "string"
      },
      {
        id: "bronze",
        dataType: "number"
      },
      {
        id: "country",
        dataType: "string"
      },
      {
        id: "date",
        dataType: "string"
      },
      {
        id: "gold",
        dataType: "number"
      },
      {
        id: "silver",
        dataType: "string"
      },
      {
        id: "sport",
        dataType: "string"
      },
      {
        id: "total",
        dataType: "number"
      },
      {
        id: "year",
        dataType: "number"
      },
    ];
        
  
 
 
    ExportIntoExl()
    {
   
    this.gridApi.exportDataAsExcel();
  }
  

  

  onGridReady(params)
  {
    this.gridApi =params.api;
    this.gridColoumApi = params.columnApi;
    //this.dataExportservice.dataExportServices().subscribe(data => {this.rowDatass =data});
    this.dataExportservice.dataExportServices().subscribe((data:any)=>{this.rowDatass =data;
    console.log(this.rowDatass)});
    
    
  }
 export()
  {
    this.dataExport.exportAsExcelFile(this.rowDatass, 'sample');
  }
 

}
