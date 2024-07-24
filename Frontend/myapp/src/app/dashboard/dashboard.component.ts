import { Component, DoCheck, Input, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import {ProductsService} from "../products.service";

@Component({
  selector: "app-dashboard",
  styleUrls: ["./dashboard.component.css"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit, DoCheck {

public user = sessionStorage.getItem("username");
  public type: boolean = false;
  public errorMessage: string;
  public cards2 = [];
  public cards = [];
  public isLoggedIn;
  public id;
  public field;
  public res1: boolean = false;
  public buynow: boolean = false;
  public log: boolean = false;
  // @Output() datatoemit = new EventEmitter();
  public result: string = "";
  public res: boolean = false;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public images = ["../../assets/fashion.jpg", "../../assets/shoess.jpg", "../../assets/furniture.jpg",
   "../../assets/electronics.jpg"];

  constructor(config: NgbCarouselConfig, private productservice: ProductsService,
              private router: Router, private m: MatSnackBar) {
    // config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  public notify() {
    if (this.log) {
    this.m.open("we will notify you", "ok", {
      duration: 2000,
    });
  } else {
    this.m.open("please login with your email so that we can send you a notification when available", "ok", {
      duration: 2000,
    });
  }
}
  public ngDoCheck() {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
    // console.log(this.isLoggedIn);
    if (this.isLoggedIn === "true") {
      // this.router.navigate(["/login"]);
      this.log = true;
    } else {
      this.log = false;
    }
  }
  public filter(input) {
    this.field = input;
    this.type = true;
    if (input === "All") {
        // this.res1=false;
        // this.res=false;
        // this.productservice.getProducts().subscribe(
        //   data=>{this.cards = data},
        //   error => this.errorMessage = error.error.message);
        // this.ngOnInit()
        this.fun();
      } else {
        this.res = true;
        this.productservice.getProducts().subscribe(
        (data) => {this.cards = data.filter((d) => d.pCategory.toLowerCase() === input.toLowerCase()); },
        (error) => this.errorMessage = error.error.message);
      } }
  public search(result) {
      this.res = true;
      this.productservice.getProducts().subscribe(
        (data) => {this.cards = data.filter((d) => d.pName.toLowerCase().includes(String(result))); },
        (error) => this.errorMessage = error.error.message);
  }
  public detail(name) {
    this.router.navigate(["/products/" + name]);
  }
  public bought(input) {
    if (this.log) {
    this.productservice.getOrderId(input).subscribe(
      (data) => {
        if (data.quantity === 0) {
          this.buynow = false;
        } else {

        this.buynow = true;
        // console.log(data);
        this.filter(this.field);
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
  // public notify() {
  //   alert("we will notify you when it is available!!");
  // }
  public fun() {
    this.productservice.getProducts().subscribe(
      (data) => {this.cards = data; },
      (error) => this.errorMessage = error.error.message);
  }
  public ngOnInit() {
    this.productservice.getProducts().subscribe(
      (data) => {this.cards = data; },
      (error) => this.errorMessage = error.error.message);
  }

}
