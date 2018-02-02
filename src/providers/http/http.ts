import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  postDatos(){
    let datos = 'BEST=Edu' 
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
   var url = 'http://localhost:8100';
   return new Promise(resolve => {
    this.http.post(url,datos,options)
       .subscribe(data => {
         resolve(data['_body']);
        });
   });
 }

}
