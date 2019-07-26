import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { RawdataComponent } from './rawdata/rawdata.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecasttwoComponent } from './forecasttwo/forecasttwo.component';
import { ForecastthreeComponent } from './forecastthree/forecastthree.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rawdata', component: RawdataComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'forecasttwo', component: ForecasttwoComponent},
  {path: 'forecastthree', component: ForecastthreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RawdataComponent];
