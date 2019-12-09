import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManterbemComponent} from './manterbem/manterbem.component';
import {CrfbComponent} from './crfb/crfb.component';
import {InicialComponent} from './inicial/inicial.component';
import {DepreciacaoComponent} from './depreciacao/depreciacao.component';


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
  },

  {
    path: 'depreciacao',
    component: DepreciacaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
