import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private host: string = environment.api.host
  private path = environment.api.path.device

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IDevice[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IDevice[]>>(url, { params: params })
  }

  find(id: string): Observable<IBase<IDevice>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.get<IBase<IDevice>>(url)
  }

  readAll(): Observable<IPage<IDevice[]>> {
    let url: string = [this.host, this.path, "/all"].join('')
    return this.client.get<IPage<IDevice[]>>(url)
  }

}
