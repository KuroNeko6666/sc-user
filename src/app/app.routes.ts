import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/guard';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    path: "device",
    loadComponent: () => import("./pages/device/device.component").then(c => c.DeviceComponent),
    loadChildren: () => import("./pages/device/device.routes").then(r => r.deviceRoutes),
    canActivate: [authGuard],
  },
  {
    path: "cart",
    loadComponent: () => import("./pages/cart/cart.component").then(c => c.CartComponent),
    loadChildren: () => import("./pages/cart/cart.routes").then(r => r.deviceRoutes),
    canActivate: [authGuard],
  },
  {
    path: "order",
    loadComponent: () => import("./pages/order/order.component").then(c => c.OrderComponent),
    loadChildren: () => import("./pages/order/order.routes").then(r => r.deviceRoutes),
    canActivate: [authGuard],
  },
  {
    path: "market",
    loadComponent: () => import("./pages/market/market.component").then(c => c.MarketComponent),
    loadChildren: () => import("./pages/market/market.routes").then(r => r.deviceRoutes),
    canActivate: [authGuard],
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent),
    canActivate: [noAuthGuard],
  },
  {
    path: "register",
    loadComponent: () => import("./pages/register/register.component").then(c => c.RegisterComponent),
    canActivate: [noAuthGuard],
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
