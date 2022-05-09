import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoute: Routes = [
  {
    path: 'home',
    children: [{ path: '', component: HomeComponent }],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoute)],
  exports: [HomeComponent],
})
export class HomeModule {}
