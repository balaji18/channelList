import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IChannel} from '../channelList';
import {Observable} from "rxjs/Observable"
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private _url: string = '/assets/data/channelList.json';

  constructor(private http: HttpClient) { }

  getDetails():Observable<IChannel[]>{
    return this.http.get<IChannel[]>(this._url).pipe(
      map(data =>data),
      catchError(this.errorHandler)
    );
  }

  errorHandler( error:HttpErrorResponse){
    return throwError(error || 'Server Error');
  }
}
