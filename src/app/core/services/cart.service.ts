import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IDevice, IPage, IUser } from '../model';
import { IOrder } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private host: string = environment.api.host
  private path = environment.api.path.cart

  constructor(
    private client: HttpClient
  ) { }

  read(params: HttpParams): Observable<IPage<IDevice[]>> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<IPage<IDevice[]>>(url, { params: params})
  }

  post(): Observable<IPage<string>> {
    let url: string = [this.host, "/order"].join('')
    return this.client.post<IPage<string>>(url, {})
  }

  add(id: string): Observable<IPage<string>> {
    let url: string = [this.host, this.path, "/", id].join('')
    return this.client.put<IPage<string>>(url,{})
  }

}
