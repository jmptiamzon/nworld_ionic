import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  reference: string;
  date: string;
  fname: string;
  type: string;
  branch: string;
  accountn: string;
  gross: string;
  net: string;
  redemption: string;
}

@Component({
  selector: 'app-encashment',
  templateUrl: './encashment.page.html',
  styleUrls: ['./encashment.page.scss'],
})
export class EncashmentPage implements OnInit {
  loaderToShow: any;
  displayedColumns: string[] = ['ref', 'date', 'fname', 'type', 'branch', 'account', 'gross', 'net', 'redemp'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public loadingController: LoadingController
  ) {
    this.showLoader();

    const users = [
      {
        reference: '663637',
        date: 'Dec 10 2019 9:25AM',
        fname: 'Nolasco, June Paolo G.',
        type: 'Pay-out to Product',
        branch: 'NWorld Ortigas',
        accountn: '#',
        gross: '8,925.00',
        net: '8,925.00',
        redemption: 'checkmark'
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
