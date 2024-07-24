import { DOCUMENT } from "@angular/common";
import { Component, DoCheck, EventEmitter, OnInit, Output } from "@angular/core";
import { Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginusersService } from "../loginusers.service";
import {Users} from "./users";

@Component({
  selector: "app-log",
  styleUrls: ["./log.component.css"],
  templateUrl: "./log.component.html",
})
export class LogComponent implements OnInit, DoCheck {
  public hide = true;
  public phide = true;
  public rphide = true;
  public users: any[];
  public user = {email: "", password: ""};
  public ruser = {username: "", email: "", password: "", rpassword: ""};
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public isLoggedIn = "false";
  public uerrorMessage: string = "";
  public rerrorMessage: string = "";
  public successmessage: string = "";
  // login = new Users(this.user.email,this.user.password);
public a;
  public uvalid = true;
  public rvalid = true;
  public ev: boolean;
  public rv: boolean;
  public pv: boolean = true;
   public selected = new FormControl(0);
  // public selected;
  constructor(private fb: FormBuilder, private loginService: LoginusersService, private router: Router) {
    // document.getElementById('login').style.display = 'none';

  // sessionStorage.setItem('isLoggedIn', this.isLoggedIn)

    this.loginService.getUsers()
            .subscribe((users) => this.users = users);
   }
   public ngDoCheck() {
        this.a = sessionStorage.getItem("isLoggedIn");
        // console.log(this.a);
        if (this.a === "true") {
          this.router.navigate(["/dashboard"]);
        }
        // console.log(this.a)
        // this.loginService.getUsers()
        //     .subscribe((users) => this.users = users);
   }
  public ngOnInit() {

  this.loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required,
       Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/)]],
  });
  this.registerForm = this.fb.group({
    remail: ["", [Validators.required, Validators.email]],
    rpassword: ["", [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/)]],
    rrpassword: ["", [Validators.required]],
    rusername: ["", [Validators.required]],
  });
}

    public reg() {
      this.selected = new FormControl(1);
    }
    public onSubmit() {
      // this.loginService.getUsers()
      //       .subscribe((users) => this.users = users);
        this.uvalid = true;
        const name = this.user.email;
        sessionStorage.setItem("username", this.user.email);

        const password = this.user.password;
        const user1 = this.users.filter((currUser) => {
          if (currUser.phoneNo === name) {
                this.ev = true;
                // console.log(this.ev)
                if (currUser.password === password) {
                  this.pv = true;
                  // console.log(currUser.uName);
                  sessionStorage.setItem("uname", currUser.uName);
                  // sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
                  return this.ev && this.pv;
                } else {
                  this.pv = false;
                }
          } else {
            this.ev = false;
          }
          // console.log(this.ev);
          return this.ev && this.pv;
        });

        if (user1.length > 0) {
            this.isLoggedIn = "true";
            // this.a=='true'
            // sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);

            this.router.navigate(["/dashboard"]);
        } else {
            this.isLoggedIn = "false";
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
            this.uvalid = false;
            // console.log(this.ev)
            if (!this.pv) {
              this.uerrorMessage = "incorrect password";
            } else {
              if (!this.ev) {
                this.uerrorMessage = "User not registered";
              } else {
                this.uerrorMessage = "";
              }
            }
        }
    }
    public onregister() {
      // this.loginService.getUsers()
      //       .subscribe((users) => this.users = users);
      //       console.log(this.users)
      this.rvalid = true;
      const name = this.ruser.email;
      // sessionStorage.setItem("username", this.user.email);
      if (this.ruser.password === this.ruser.rpassword) {
        const user2 = this.users.filter((currUser) => {
            if (currUser.phoneNo === name) {
                  this.rv = true;
                  return this.rv;

            }
            // console.log(this.ev);
            // return this.rv;
          });
        // console.log(user2);
        if (user2.length < 1) {
            // console.log(user2);
            this.loginService.registerUser(this.ruser).subscribe(
        (data) => this.successmessage = "succesfully registered" ,
        (error) => this.rerrorMessage = error.error.message,
      );
          } else {
        this.rvalid = false;
        this.rerrorMessage = "email is already registered";
          }

      // const password = this.user.password;
      // const user1 = this.users.filter((currUser) => {
      //   if (currUser.phoneNo === name) {
      //         this.ev = true;
      //         // console.log(this.ev)
      //         if (currUser.password === password) {
      //           this.pv = true;
      //           // console.log(currUser.uName);
      //           sessionStorage.setItem("uname", currUser.uName);
      //           // sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
      //           return this.ev && this.pv;
      //         } else {
      //           this.pv = false;
      //         }
      //   } else {
      //     this.ev = false;
      //   }
      //   // console.log(this.ev);
      //   return this.ev && this.pv;
      // });

      // if (user1.length > 0) {
      //     this.isLoggedIn = "true";
      //     // this.a=='true'
      //     // sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
      //     sessionStorage.setItem("isLoggedIn", this.isLoggedIn);

      //     this.router.navigate(["/dashboard"]);
      // } else {
      //     this.isLoggedIn = "false";
      //     sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
      //     this.uvalid = false;
      //     // console.log(this.ev)
      //     if (!this.pv) {
      //       this.rerrorMessage = "incorrect password";
      //     } else {
      //       if (!this.ev) {
      //         this.rerrorMessage = "User not registered";
      //       } else {
      //         this.rerrorMessage = "";
      //       }
      //     }
      // }
    } else {
      this.rvalid = false;
      this.rerrorMessage = "please re-enter the password correctly";
    }

    }
  // func(){
  //   const email = this.user.email;
  //   const password = this.user.password;
  //   const user1 = this.users.filter((u) => {return u.emailId === email && u.password === password});
  //       if (user1) {
  //         console.log(this.users)
  //         console.log(this.user.email)
  //         sessionStorage.setItem('username',this.user.email)

  //           this.isLoggedIn = 'true';
  //           sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
  //           // document.getElementById('toolbar').style.display = 'block';

  //           // this.dash=true
  //           this.router.navigate(['/dashboard']);
  //       } else {
  //         console.log(this.users)
  //         console.log(user1)
  //         console.log(password);

  //           // this.isLoggedIn = 'false';
  //           // sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
  //           // this.valid = false;
  //           // document.getElementById('toolbar').style.display = 'none';
  //       }
  // }

}
