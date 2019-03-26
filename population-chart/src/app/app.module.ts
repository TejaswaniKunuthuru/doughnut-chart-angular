import { BrowserModule } from '@angular/platform-browser';
import { StorageServiceModule} from 'angular-webstorage-service';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { PopulationChartComponent } from './population-chart/population-chart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PopulationChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    StorageServiceModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
