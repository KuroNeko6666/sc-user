import { Route } from "@angular/router";

export const deviceRoutes: Route[] = [
  {
    path: "list",
    title: "market list",
    loadComponent: () => import("./market-list/market-list.component").then(c => c.MarketListComponent)
  },
  {
    path: "detail/:id",
    title: "market detail",
    loadComponent: () => import("./market-detail/market-detail.component").then(c => c.MarketDetailComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
