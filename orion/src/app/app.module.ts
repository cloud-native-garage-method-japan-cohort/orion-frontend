import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { DiscoveryService } from './service/discovery.service';

@NgModule({
  declarations: [
    AppComponent,
    DiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DiscoveryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
