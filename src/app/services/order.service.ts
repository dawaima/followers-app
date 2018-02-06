import { AuthService } from './auth.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    // let token = localStorage.getItem('token');
    // let headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + token);

    // let options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
