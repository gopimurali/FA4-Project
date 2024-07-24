import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LoginusersService} from "../loginusers.service";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-view-orders",
  styleUrls: ["./view-orders.component.css"],
  templateUrl: "./view-orders.component.html",
})
export class ViewOrdersComponent implements OnInit {
  public users;
  public orders;
  public product;
  public email = sessionStorage.getItem("username");
  public errorMessage: string = "";
  public totalcost: number;
  constructor(private productservice: ProductsService,
              private route: ActivatedRoute, private userservice: LoginusersService) {

}

  public ngOnInit() {
    this.userservice.getUsers().subscribe(

      (data) => {
        // this.users=data.filter((d)=>{console.log(d.phoneNo);return true ;})
        // console.log(data);
        for (const i of data) {
          // console.log(i);
          if (i.phoneNo === this.email) {
            // console.log(i.phoneNo);
            this.users = i;
            // console.log(this.users);
          } else {
            // console.log("not found");
          }
        }
        this.orders = this.users.orders;
        // console.log(this.orders);
      },
      (error) => {this.errorMessage = error.error.message; },
  );
   }

}
