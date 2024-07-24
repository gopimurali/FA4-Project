import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import {Product} from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductsService {

  public email = sessionStorage.getItem("username");
  constructor(private http: HttpClient) { }
  public getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>("http://localhost:1050/getAllProducts");

  }

  public getOrderId(pName): Observable<any> {
    return this.http.get<any>("http://localhost:1050/checkout/" + this.email + "/" + pName);
  }
//   private handleError(err: HttpErrorResponse) {
//     console.log(err);
//     return Observable.throw(err.error() || 'Server error');
// }

public getAllOrders(): Observable<any> {
  return this.http.get<any>("http://localhost:1050/vieworders/" + this.email);
}
}
