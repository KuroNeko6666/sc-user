import { Route } from "@angular/router";

export const deviceRoutes: Route[] = [
  {
    path: "list",
    title: "cart list",
    loadComponent: () => import("./cart-list/cart-list.component").then(c => c.CartListComponent)
  },
  {
    path: "detail/:id",
    title: "cart detail",
    loadComponent: () => import("./cart-detail/cart-detail.component").then(c => c.CartDetailComponent)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];
