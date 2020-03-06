import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ViewCompComponent } from './view-comp/view-comp.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ViewCompComponent }
];

@NgModule({
  declarations: [ViewCompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ChannelModule { }
