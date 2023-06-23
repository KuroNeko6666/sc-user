import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, DashboardService, DeviceService } from 'src/app/core/services';
import { IDevice } from 'src/app/core/model';
import { Status } from 'src/app/core/enum';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private service: DeviceService = inject(DeviceService)

  public status: Status = Status.initial
  public device?: IDevice
  public devices?: IDevice[]

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.status = Status.loading
    this.service.readAll().subscribe({
      next: (res) => {
        this.devices = res.data
        this.status = Status.initial
      },
      error: (err) => {
        this.status = Status.error
        console.log(err);
      }
    })
  }


}
