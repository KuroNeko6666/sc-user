import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardComponent),
  },
  {
    path: "device",
    loadComponent: () => import("./pages/device/device.component").then(c => c.DeviceComponent),
    loadChildren: () => import("./pages/device/device.routes").then(r => r.deviceRoutes),
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent),
  },
  {
    path: "register",
    loadComponent: () => import("./pages/register/register.component").then(c => c.RegisterComponent),
  },
  {
    path: "forgot",
    loadComponent: () => import("./pages/forgot/forgot.component").then(c => c.ForgotComponent),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
