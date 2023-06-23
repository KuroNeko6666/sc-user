import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from 'src/app/core/services';
import { IDevice, IPage, IParam } from 'src/app/core/model';
import { HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PageChange, Status } from 'src/app/core/enum';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {

}
