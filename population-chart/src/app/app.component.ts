
import { Component } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
populationDatas:PopulationTypes[]=[
{"countryName":"India",
"populationCount":400
},
{"countryName":"Brezil",
"populationCount":500
},
{"countryName":"noida",
"populationCount":600
},
{"countryName":"UK",
"populationCount":700
},
{"countryName":"USA",
"populationCount":500
},
{"countryName":"Astralia",
"populationCount":400
},
{"countryName":"Canada",
"populationCount":800
},
{"countryName":"England",
"populationCount":800
},
]

}
export interface PopulationTypes{
countryName:string;
populationCount:number;
} 
