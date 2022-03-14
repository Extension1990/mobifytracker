import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/';

  // HTTP HeadersOptions
  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private httpClient: HttpClient) { }

  // Get all users
  getUsers () {
    return this.httpClient.get(this.REST_API + 'users');
  }
}
