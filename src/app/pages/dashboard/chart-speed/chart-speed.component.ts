import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Status } from 'src/app/core/enum';
import { IDevice, IChart } from 'src/app/core/model';
import { DashboardService } from 'src/app/core/services';

@Component({
  selector: 'app-chart-speed',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './chart-speed.component.html',
  styleUrls: ['./chart-speed.component.css']
})
export class ChartSpeedComponent implements OnInit, OnChanges {
  @Input({ required: true }) device?: IDevice

  private service: DashboardService = inject(DashboardService)

  public chartOptions: ChartOptions<'pie'> = { responsive: true, animation: false };
  public chartLabels: string[] = [];
  public chartDatasets: number[] = [];
  public chartLegend = true;
  public chartPlugins = [];

  public status: Status = Status.initial

  ngOnChanges(changes: SimpleChanges): void {
    this.read()
  }

  ngOnInit(): void {
    this.read()
    setInterval(() => this.read(), 5000)
  }

  read(): void {
    this.service.readSpeed(this.device?.id ?? "")
      .subscribe({
        next: (res) => {
          this.setChartData(res.data)
          this.status = Status.initial
        },
        error: (err) => {
          console.log(err);
          this.status = Status.error
        }
      })
  }

  setChartData(chart: IChart) {
    this.chartLabels = chart.labels
    this.chartDatasets = chart.data
  }

}
