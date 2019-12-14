import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  hide = true;
  loaderToShow: any;

  constructor(
    public loadingController: LoadingController
  ) {
    this.showLoader();
  }

  ngOnInit() {
    this.hideLoader();
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
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
