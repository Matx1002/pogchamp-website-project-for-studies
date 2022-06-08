import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { user } from './form/form.component'

@Injectable({
  providedIn: 'root'
})

export class DataService{
  host = 'https://imsi.pl:5000/';

  constructor(private http: HttpClient) {
  }

  createUser(userCreate_t: user): Observable<UserCreateResponse> {
    let UserCreate={name: userCreate_t.number}
    return this.http.put<UserCreateResponse>(this.host + 'players', UserCreate);
  }

  updateUser(id: number, userUpdate: user): Observable<UserUpdateResponse> {
    let UserUpdate={p0: userUpdate.fName, p1: userUpdate.lName, p2: userUpdate.email};
    return this.http.put<UserUpdateResponse>(this.host + 'players/' + id, UserUpdate);
  }
}

export interface UserUpdate {
  p0: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
}

export interface UserUpdateResponse {
  err: number;
}

export interface UserCreate {
  name: string;
}

export interface UserCreateResponse {
  id: number;
}