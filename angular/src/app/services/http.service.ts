import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {
  public static host = "localhost";
  public static port = 3000;
  public static domain = "mean-auth-ct.herokuapp.com"
//   public static url = "http://" + HttpService.host + ":" + HttpService.port;  
  public static url = "http://"+ HttpService.domain;

  constructor(
    public http: Http
  ) { }

  get (endpoint: string, headersObject: Object): Observable<any> {
        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.get(HttpService.url + endpoint, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    };
  
  post(endpoint: string, body: any, headersObject: Object): Observable<any> {
        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        console.log(HttpService.url + endpoint);

        return this.http.post(HttpService.url + endpoint, body, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    }

    put(endpoint: string, body: any, headersObject: Object): Observable<any> {
        let headers: Headers = new Headers();
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.put(HttpService.url + endpoint, body, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    }

    delete(endpoint: string, headersObject: Object): Observable<any> {
        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions(
            {
                headers: headers
            }
        );

        return this.http.delete(HttpService.url + endpoint, options)
            .map(
                (res: Response): Promise<any> => {
                    return res.json();
                }
            );
    }

}
