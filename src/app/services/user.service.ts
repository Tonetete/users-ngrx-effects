import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get(`${this.url}users?perPage=6&delay=10`)
      .pipe(map((data: any) => data['data']));
  }

  getUserById({ id }: { id: string }): Observable<any> {
    return this.http
      .get(`${this.url}users/${id}`)
      .pipe(map((data: any) => data['data']));
  }
}
