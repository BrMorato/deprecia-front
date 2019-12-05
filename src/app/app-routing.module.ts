import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManterbemComponent} from './manterbem/manterbem.component';
import {CrfbComponent} from './crfb/crfb.component';
import {InicialComponent} from './inicial/inicial.component';

const routes: Routes = [

  {
    path: 'manterbem',
    component: ManterbemComponent
  },

  {
    path: 'crfb',
    component: CrfbComponent

  },

  {
    path: '',
    component: InicialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
