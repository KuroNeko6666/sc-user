import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IChart, IDevice, IDeviceData } from 'src/app/core/model';
import { DashboardService } from 'src/app/core/services';
import { Status } from 'src/app/core/enum';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

const DATETYPE = [
  "second",
  "hour",
  "day",
  "month",
  "year",
]

@Component({
  selector: 'app-chart-created',
  standalone: true,
  imports: [CommonModule, NgChartsModule, HttpClientModule],
  templateUrl: './chart-created.component.html',
  styleUrls: ['./chart-created.component.css']
})
export class ChartCreatedComponent implements OnInit, OnChanges {
  @Input({required: true}) device?: IDevice

  private service: DashboardService = inject(DashboardService)

  public chartData?: ChartConfiguration<'line'>['data']
  public chartOption: ChartOptions<'line'> = { responsive: false, animation: false };
  public chartLegend: boolean = true

  public dateType = DATETYPE
  public status: Status = Status.initial
  public current: string = DATETYPE[0]

  ngOnChanges(changes: SimpleChanges): void {
    this.read()
  }

  ngOnInit(): void {
    this.read()
    setInterval(() => this.read(), 5000)
  }

  read(): void{
    this.service.read(this.device?.id ?? "", this.params)
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

  changeDate(date: string) {
    this.current = date
    this.read()
  }

  setChartData(data: IChart){
    this.chartData = {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          label: "Recents Data Device"
        }
      ]
    }
  }

  get params(): HttpParams {
    let res: HttpParams = new HttpParams()
    .set("date_type", this.current ?? DATETYPE[0])
    return res
  }

}
