import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { Crfb} from './modelo/crfb.model';
import { Bem} from './modelo/bem.model';


import { HttpClient, HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrfbComponent } from './crfb/crfb.component';
import { ManterbemComponent } from './manterbem/manterbem.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    CrfbComponent,
    ManterbemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    NgSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }



