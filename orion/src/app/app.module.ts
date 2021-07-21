import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { DiscoveryService } from './service/discovery.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DiscoveryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    DiscoveryService,
    SearchService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
export class FormModel {
  constructor(
    public searchText: string,
  ){}

}
