import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { DistCountTableComponent } from '../tables/dist-count-table/dist-count-table.component';
import { NtcDetailsTableComponent } from '../tables/ntc-details-table/ntc-details-table.component';
import { PspCountTableComponent } from '../tables/psp-count-table/psp-count-table.component';
import { SponsCountTableComponent } from '../tables/spons-count-table/spons-count-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    DistCountTableComponent,
    NtcDetailsTableComponent,
    PspCountTableComponent,
    SponsCountTableComponent,
  ]
})
export class DashboardPageModule {}
