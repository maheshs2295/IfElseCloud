import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from './api-service.service';
import { CommonModule } from '@angular/common';
import { GridTableComponent } from './components/grid-table/grid-table.component';
import { ChartComponent } from 'ng-apexcharts';
import { ChartsComponent } from './components/charts/charts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,GridTableComponent,ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoading = true;
  title = 'if-else-project';
  gridData: any;
constructor(private apiService: ApiServiceService){}
  ngOnInit(){
    this.apiService.getData().subscribe(data => {
        this.isLoading = false;
        this.gridData = data;
       
      
     
    })
  }
}
