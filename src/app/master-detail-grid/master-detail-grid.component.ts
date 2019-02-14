import { Component, OnInit } from '@angular/core';
import {DataApiServicesService} from '../Servisess/data-service';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import "ag-grid-enterprise";
@Component({
  selector: 'app-master-detail-grid',
  templateUrl: './master-detail-grid.component.html',
  styleUrls: ['./master-detail-grid.component.css']
})
export class MasterDetailGridComponent implements OnInit {


  private gridApi;
  
  private gridColoumApi;
  
  private sortingOrder;
  private rowData:any =[];



  constructor(private dataservice : DataApiServicesService , private http :HttpClient){}
  ngOnInit(){

    this.dataservice.dataServices().subscribe((Response)=>console.log(Response));
    //console.log(this.arr);
      }

     



coloumsDefs = [
  {
    field: "name",
    cellRenderer: "agGroupCellRenderer"
  },
  { field: "account" },
  { field: "calls" },
  {
    field: "minutes",
    valueFormatter: "x.toLocaleString() + 'm'"
  }
];

  detailCellRendererParams = {
    detailGridOptions: {
      columnDefs: [
        { field: "callId" },
        { field: "direction" },
        { field: "number" },
        {
          field: "duration",
          valueFormatter: "x.toLocaleString() + 's'"
        },
        { field: "switchCode" }
      ],
      // rowData: [
        
      //   {athlete:  "athlete"},
      //   {age: "age"}
      // ]

      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    },
    getDetailRowData: function(params) {
      params.successCallback(params.data.callRecords);
    }
  };
 


  onGridReady(params)
  {
    this.gridApi =params.api;
    this.gridColoumApi = params.columnApi;
    this.dataservice.dataServices().subscribe(data => {this.rowData =data});

    setTimeout(function() {
      var rowCount = 0;
      params.api.forEachNode(function(node) {
        node.setExpanded(rowCount++ === 1);
      });
    }, 500);
  }

}
