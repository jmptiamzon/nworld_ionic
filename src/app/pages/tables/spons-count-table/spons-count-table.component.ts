import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  header: string;
  count: number;
}

@Component({
  selector: 'app-spons-count-table',
  templateUrl: './spons-count-table.component.html',
  styleUrls: ['./spons-count-table.component.scss'],
})
export class SponsCountTableComponent implements OnInit {
  displayedColumns: string[] = ['header', 'count'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    const ntc = [
      {
        header: 'Platinum',
        count: 0
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ntc);
  }

  ngOnInit() {}

}
