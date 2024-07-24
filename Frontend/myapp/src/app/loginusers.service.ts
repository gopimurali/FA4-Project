import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {RegisterUser} from "./log/registeruser";
import {Users} from "./log/users";
@Injectable({
  providedIn: "root",
})
export class LoginusersService {

  constructor(private http: HttpClient) {}
    public getUsers(): Observable<Users[]> {
      return this.http.get<Users[]>("http://localhost:1050/getAllUsers");

}
public registerUser(input): Observable<RegisterUser[]> {
  // console.log(input)
  return this.http.post<RegisterUser[]>("http://localhost:1050/registeruser", input);
}
}
