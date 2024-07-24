import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
  selector: "app-products",
  styleUrls: ["./products.component.css"],
  templateUrl: "./products.component.html",
})
export class ProductsComponent implements OnInit {
public pName: string;
public product;
public id;
public buynow: boolean = false;
public errorMessage;
public log: boolean = false;
  public isLoggedIn: string;
constructor(private productservice: ProductsService, private route: ActivatedRoute,
            private router: Router, private m: MatSnackBar) {}
public ngOnInit() {
  this.route.params.subscribe((param) => { this.pName = param.name; });
  this.productservice.getProducts().subscribe(
    (data) => this.product = data.filter((d) => d.pName === this.pName)[0],
  );
  this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (this.isLoggedIn === "true") {
    this.log = true;
  } else {
    this.log = false;
  }
}
public checkout() {
  this.buynow = true;

}
public notify() {
  this.m.open("we will notify you", "ok", {
    duration: 2000,
  });
}
public call() {
  this.route.params.subscribe((param) => { this.pName = param.name; });
  this.productservice.getProducts().subscribe(
    (data) => this.product = data.filter((d) => d.pName === this.pName)[0],
  );
}
public bought(input) {
  if (this.log) {
  this.productservice.getOrderId(input).subscribe(
    (data) => {
      if (data.quantity === 0) {
        this.buynow = true;
      } else {

      this.buynow = true;
      // this.router.navigate(['/products/'+this.product.pName])
      this.call();
      this.id = data.orderId; this.m.open("Your order for " + input + " is placed with orderId " + this.id, "ok", {
        duration: 2000,
      }); }},
    (error) =>  this.errorMessage = error.error.message,
  );
  // alert("Your order for "+input+" is placed with orderId" +this.id)
} else {
  this.m.open("please login to buy", "ok", {
    duration: 2000,
  });
}
}
public cancel() {
  this.buynow = false;
}

public goback() {
  history.back();
}

}
