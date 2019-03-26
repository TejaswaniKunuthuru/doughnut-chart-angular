
import { Component, OnInit, Input } from '@angular/core';

@Component({
selector: 'app-population-chart',
templateUrl: './population-chart.component.html',
styleUrls: ['./population-chart.component.css']
})
export class PopulationChartComponent implements OnInit {

constructor() { }
ngOnInit() {
for(let data of this.populationDat){
this.doughnutChartLabels.push(data.countryName);
this.doughnutChartData.push(data.populationCount);
}
}
name = 'Angular';
@Input() populationDat;
doughnutChartLabels:string[]=[];
doughnutChartData:number[]=[];

public doughnutChartType:string = 'doughnut';
// events
public chartClicked(e:any):void {
console.log(e);
}
public chartHovered(e:any):void {
console.log(e);
}
} 


