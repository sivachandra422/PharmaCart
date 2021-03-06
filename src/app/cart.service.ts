import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  receiveFromPharma(v)
  {
    this.http.post('user/pharma',v).subscribe();
  }

  sendToCart(v):Observable<any>
  {
   return this.http.get('user/cart'); 
  }

    receiveFromCart(v):Observable<any>
    {
      var httpOptions={
        headers:new HttpHeaders({'content-type':'application/json'}),
        body:v
        }
      return  this.http.delete('user/cart',httpOptions)
    }

}
