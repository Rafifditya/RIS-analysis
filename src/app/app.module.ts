import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { PcapdataService } from './pcapdata.service';
import { PuredataService } from './puredata.service';
import { PredictionService } from './prediction.service';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecasttwoComponent } from './forecasttwo/forecasttwo.component';
import { ForecastthreeComponent } from './forecastthree/forecastthree.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    routingComponents,
    ForecastComponent,
    ForecasttwoComponent,
    ForecastthreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PcapdataService, PuredataService, PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
