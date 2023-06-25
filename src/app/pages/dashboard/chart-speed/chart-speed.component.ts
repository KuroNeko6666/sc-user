import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ChartConfiguration, ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Status } from 'src/app/core/enum';
import { IDevice, IChart } from 'src/app/core/model';
import { DashboardService } from 'src/app/core/services';
import { NgChartsModule } from 'ng2-charts';

const DATETYPE = [
  "day",
  "month",
  "year",
]

@Component({
  selector: 'app-chart-speed',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgChartsModule],
  templateUrl: './chart-speed.component.html',
  styleUrls: ['./chart-speed.component.css']
})
export class ChartSpeedComponent implements OnInit, OnChanges {
  @Input({ required: true }) device?: IDevice

  private service: DashboardService = inject(DashboardService)

  public pieChartOptions: ChartConfiguration['options'] = {
    animation: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ ];

  public chartOptions: ChartOptions<'pie'> = { responsive: true, animation: false };
  public chartLabels: string[] = [];
  public chartDatasets: ChartData<'pie', number[], string> = {
    labels: ["s","s"],
    datasets: [{
      data:[10,12]
    }],
  };

  public dateType = DATETYPE
  public drawer: boolean = false
  public current: string = DATETYPE[0]
  public rawStatus = Status
  public status: Status = Status.initial
  private interval?: any

  ngOnChanges(changes: SimpleChanges): void {
    this.read()
  }

  ngOnInit(): void {
    this.read()
    this.interval = setInterval(() => this.read(), 5000)
  }

  read(): void {
    this.service.readSpeed(this.device?.id ?? "JBS-X5", this.params)
      .subscribe({
        next: (res) => {
          console.log(res);

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
    let data: ChartData<'pie', number[], string> = {
      labels: [...chart.labels],
      datasets: [{
        data:[...chart.data]
      }],
    };

    this.chartDatasets = data
  }

  get params(): HttpParams {
    let res: HttpParams = new HttpParams()
    .set("date_type", this.current ?? DATETYPE[0])
    return res
  }

  drawerToggler(){
    this.drawer = !this.drawer
  }

  changeDate(date: string){
    this.current = date
    this.drawerToggler()
    this.read()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }


}
