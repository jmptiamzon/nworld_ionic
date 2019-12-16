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
      url: '/menu/menu/dashboard',
      icon: 'dashboard'
    },
    {
      title: 'Network',
      url: '/menu/menu/network',
      icon: 'supervisor_account'
    },
    {
      title: 'Registration',
      url: '/menu/menu/registration',
      icon: 'dashboard'
    },
    {
      title: 'Encashment',
      url: '/menu/menu/encashment',
      icon: 'money'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'exit_to_app'
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
