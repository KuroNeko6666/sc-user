import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IBase, IUser } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host: string = environment.api.host
  private path = environment.api.path.auth
  private storage = "user"

  constructor(
    private client: HttpClient
  ) { }

  login(data: FormData): Observable<IBase<IUser>> {
    let url: string = [this.host, this.path].join('')
    return this.client.post<IBase<IUser>>(url, data)
  }

  register(data: FormData): Observable<IBase<string>> {
    let url: string = [this.host, this.path].join('')
    return this.client.put<IBase<string>>(url, data)
  }

  validate(): Observable<boolean> {
    let url: string = [this.host, this.path].join('')
    return this.client.get<boolean>(url)
  }

  logout(): Observable<any> {
    let url: string = [this.host, this.path].join('')
    return this.client.delete(url)
  }

  save(user: IUser): void {
    localStorage.setItem(this.storage, JSON.stringify(user))
  }

  get user(): IUser | undefined {
    let raw = localStorage.getItem(this.storage)
    if (raw == null) { return undefined }
    let user: IUser = JSON.parse(raw) as IUser
    return user
  }


}

