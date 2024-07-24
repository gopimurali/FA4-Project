import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogComponent} from "./log/log.component";
import {ProductsComponent} from "./products/products.component";
import {ViewOrdersComponent} from "./view-orders/view-orders.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LogComponent },
  { path: "products/:name", component: ProductsComponent},
  { path: "vieworders", component: ViewOrdersComponent},
  { path: "welcome", component: WelcomeComponent },
  // { path: '', component : LogComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
