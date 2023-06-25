import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, DashboardService, DeviceService } from 'src/app/core/services';
import { IDevice } from 'src/app/core/model';
import { Status } from 'src/app/core/enum';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ChartSpeedComponent } from './chart-speed/chart-speed.component';
import { ChartTotalComponent } from './chart-total/chart-total.component';
import { ChartCreatedComponent } from './chart-created/chart-created.component';
import { ChartDeviceComponent } from './chart-device/chart-device.component';
import { HomeComponent } from 'src/app/shared/layouts/home/home.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ChartSpeedComponent,
    ChartTotalComponent,
    ChartCreatedComponent,
    ChartDeviceComponent,
    HomeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private service: DeviceService = inject(DeviceService)

  public rawStatus = Status
  public status: Status = Status.loading
  public device?: IDevice
  public devices?: IDevice[]
  public drawer: boolean = false;

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.status = Status.loading
    this.service.read(this.params).subscribe({
      next: (res) => {
        this.devices = res.data
        this.device = this.devices[0] ?? undefined
        this.status = Status.initial
      },
      error: (err) => {
        this.status = Status.error
        console.log(err);
      }
    })
  }

  changeDevice(device: IDevice) {
    this.device = device
    this.drawerToggler()
  }

  drawerToggler(){
    this.drawer = !this.drawer
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", 1)
      .append("limit", 10)
      .append("search", "")
  }


}
