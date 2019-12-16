import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  upgrade: string;
  uae: string;
  nigeria: string;
}

@Component({
  selector: 'app-ntc-details-table',
  templateUrl: './ntc-details-table.component.html',
  styleUrls: ['./ntc-details-table.component.scss'],
})
export class NtcDetailsTableComponent implements OnInit {
  displayedColumns: string[] = ['upgrade', 'uae', 'nigeria'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    const ntc = [
      {
        upgrade: 'TOTAL BONUSES:',
        uae: '0.00',
        nigeria: '0.00'
      },
    ];

    this.dataSource = new MatTableDataSource(ntc);
  }

  ngOnInit() {}

}
