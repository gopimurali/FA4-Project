import { Component, DoCheck } from "@angular/core";
import {Router } from "@angular/router";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",

})
export class AppComponent implements DoCheck {
  // dash : boolean = false;
  // user : String;
  public isLoggedIn;
    // loginTitle = 'logout';z
    public log = "login";
    public userName: string;
    constructor(private router: Router) { }

    public ngDoCheck(): void {
        this.userName = sessionStorage.getItem("uname");
        this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (this.isLoggedIn === "true") {
          this.log = "logout";
        } else {
          this.log = "login";
        }
    }

    public logout() {
      if (this.log === "logout") {
      this.isLoggedIn = "false";
      sessionStorage.clear();
      this.router.navigate(["/dashboard"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
    // refresh(): void {
    //   // window.location.reload();
    //   console.log(this.router.url)
    //   if(this.router.url=="/dashboard"){
    //     window.location.reload();
    //   }

    public vieworders() {
      const email = sessionStorage.getItem("usernname");
      this.router.navigate(["/vieworders"]);
    }
    // login() {
    //     const value = document.getElementById('login').innerHTML;

    //     if (value === 'register') {
    //         this._router.navigate(['/login']);
    //     } else if (value === 'Logout') {
    //         sessionStorage.clear();
    //         document.getElementById('login').innerHTML = 'register';
    //         document.getElementById('welcome').style.display = 'none';
    //         this._router.navigate(['/login']);
    //     }
    // }
}
