import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllusersComponent } from './allusers/allusers.component';

const approutes: Routes = [
  { path: '' , component: AllusersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(approutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
