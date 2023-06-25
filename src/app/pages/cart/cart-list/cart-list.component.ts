import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Status, PageChange } from 'src/app/core/enum';
import { IPage, IDevice, IParam } from 'src/app/core/model';
import { DeviceService } from 'src/app/core/services';
import { CartService } from 'src/app/core/services/cart.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  private service: CartService = inject(CartService)
  private router: Router = inject(Router)
  private notif: NotificationService = inject(NotificationService)

  public form: FormControl = new FormControl('')

  public devices?: IPage<IDevice[]>
  public status: Status = Status.initial
  public rawStatus = Status

  public dataParams: IParam = {
    page: 1,
    limit: 10,
    search: ""
  }

  ngOnInit(): void {
    this.read()
    this.form.valueChanges.subscribe(res => this.search(res))
  }

  changePage(data: PageChange): void {
    switch (data) {
      case PageChange.increment:
        this.dataParams.page! += 1
        break;
      case PageChange.decrement:
        this.dataParams.page! -= 1
        break;
    }
    this.read()
  }

  limitChange(limit: number): void {
    this.dataParams.limit = limit
    this.read()
  }

  search(text: string | null): void {
    this.dataParams.search = text ?? ""
    this.read()
  }

  read() {
    this.status = Status.loading
    this.service.read(this.params).subscribe({
      next: (res) => {
        this.devices = res
        this.status = Status.initial
      },
      error: (err) => {
        this.devices = undefined
        this.status = Status.error
      }
    })
  }

  checkOut(): void {
    this.service.post().subscribe({
      next: (res) => {
        this.notif.push({
          message: "Perangkat berhasil dipesan",
          status: "success"
        })
        this.read()
      },
      error: (err) => {
        console.log(err);
        this.notif.push({
          message: "Perangkat gagal dipesan",
          status: "failure"
        })
      }
    })
  }

  private get params(): HttpParams {
    return new HttpParams()
      .set("page", this.dataParams.page ?? 1)
      .append("limit", this.dataParams.limit ?? 10)
      .append("search", this.dataParams.search ?? "")
  }
}
