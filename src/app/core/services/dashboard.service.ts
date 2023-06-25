import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBase, IChart } from '../model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private host: string = environment.api.host
  private path = environment.api.path.dashboard

  constructor(
    private client: HttpClient
  ) { }

  readData(id: string, params: HttpParams): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "device-data/", id].join('')
    return this.client.get<IBase<IChart>>(url, {params: params})
  }

  readSpeed(id: string, params: HttpParams): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "device-speed/", id].join('')
    return this.client.get<IBase<IChart>>(url, {params: params})
  }

  readTotal(): Observable<IBase<number>> {
    let url: string = [this.host, this.path, "device-total/"].join('')
    return this.client.get<IBase<number>>(url)
  }

}
