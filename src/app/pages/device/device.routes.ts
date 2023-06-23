import { Route } from "@angular/router";
import { DeviceDetailComponent } from "./device-detail/device-detail.component";
import { DeviceListComponent } from "./device-list/device-list.component";

export const deviceRoutes: Route[] = [
  {
    path: "list",
    title: "device list",
    loadComponent: () => import("./device-list/device-list.component").then(c => c.DeviceListComponent)
  },
  {
    path: "detail/:id",
    title: "device detail",
    loadComponent: () => import("./device-detail/device-detail.component").then(c => c.DeviceDetailComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
