import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-welcome",
  styleUrls: ["./welcome.component.css"],
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit() {
  }
  public login() {
    this.router.navigate(["/login"]);
  }
  public dashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
