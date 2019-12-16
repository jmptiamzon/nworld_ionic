import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { LoadingController } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  ntc: string;
  match: string;
  balance: string;
  bonus: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  loaderToShow: any;
  displayedColumns: string[] = ['id', 'ntc', 'match', 'balance', 'bonus'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public loadingController: LoadingController
  ) {
    this.showLoader();

    const ntc = [
      {
        id: 1,
        ntc: 'NP761450',
        match: '0.0',
        balance: '492,530.00',
        bonus: 'checkmark',
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ntc);
  }

  ngOnInit() {
    GoogleCharts.load(this.drawChart, {
      'packages': ['columnchart']
    });

    this.hideLoader();
  }

  drawChart() {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Year', 'Count'],
      ['Left', 1],
      ['Right', 4],
    ]);

    const chart = new GoogleCharts.api.visualization.ColumnChart(document.getElementById('columnChart'));
    chart.draw(data, {width: 300, height: 240, title: 'Company Performance'});
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        // console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }

}
