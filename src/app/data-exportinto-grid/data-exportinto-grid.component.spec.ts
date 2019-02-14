import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExportintoGridComponent } from './data-exportinto-grid.component';

describe('DataExportintoGridComponent', () => {
  let component: DataExportintoGridComponent;
  let fixture: ComponentFixture<DataExportintoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExportintoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExportintoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
