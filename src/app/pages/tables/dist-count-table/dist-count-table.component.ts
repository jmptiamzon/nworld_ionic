import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  header: string;
  left: number;
  right: number;
}

@Component({
  selector: 'app-dist-count-table',
  templateUrl: './dist-count-table.component.html',
  styleUrls: ['./dist-count-table.component.scss'],
})
export class DistCountTableComponent implements OnInit {
  displayedColumns: string[] = ['header', 'left', 'right'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    const ntc = [
      {
        header: 'Platinum',
        left: 0,
        right: 0
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ntc);
  }

  ngOnInit() {}

}
