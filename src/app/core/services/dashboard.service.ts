import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  read(id: string, params: HttpParams): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "device/", id].join('')
    return this.client.get<IBase<IChart>>(url, {params: params, withCredentials: true})
  }

  readSpeed(id: string): Observable<IBase<IChart>> {
    let url: string = [this.host, this.path, "speed/", id].join('')
    return this.client.get<IBase<IChart>>(url)
  }

}
