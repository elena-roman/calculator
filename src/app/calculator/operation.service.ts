import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private url = 'api/operations';

  constructor(private http:HttpClient) { }

  getOperations (): Observable<Array<string>> {
    return this
        .http.get<Array<string>>(this.url)
  }

}
