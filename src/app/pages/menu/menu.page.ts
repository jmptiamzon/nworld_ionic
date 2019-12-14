import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Dashboard',
      url: '/menu/menu/dashboard'
    },
    {
      title: 'Network',
      url: '/menu/menu/network'
    },
    {
      title: 'Registration',
      url: '/menu/menu/registration'
    },
    {
      title: 'Encashment',
      url: '/menu/menu/encashment'
    },
    {
      title: 'Logout',
      url: '/'
    }
  ];

  selectedPath = '';

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
