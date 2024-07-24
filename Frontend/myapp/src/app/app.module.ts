import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSidenavModule, MatTableModule, MatTabsModule} from "@angular/material";
import {MatSnackBarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { CheckoutComponent } from "./checkout/checkout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogComponent } from "./log/log.component";
// import { LoginComponent } from "./login/login.component";
import { LoginusersService } from "./loginusers.service";
import { ProductsService } from "./products.service";
import { ProductsComponent } from "./products/products.component";
import { ReversePipe } from "./reverse.pipe";
import { ViewOrdersComponent } from "./view-orders/view-orders.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    // LoginComponent,
    LogComponent,
    DashboardComponent,
    ProductsComponent,
    ViewOrdersComponent,
    // CheckoutComponent,
    ReversePipe,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    NgbModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  providers: [{provide: ProductsService,
    useClass: ProductsService }, {provide : LoginusersService, useClass : LoginusersService}],

})
export class AppModule { }
