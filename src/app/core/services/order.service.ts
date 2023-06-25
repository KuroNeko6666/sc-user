import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';
import { IDeviceMarket } from '../model/device.model';
import { IOrder } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host: string = environment.api.host
  private path = environment.api.path.order

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IOrder[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IOrder[]>>(url, { params: params})
  }

}
