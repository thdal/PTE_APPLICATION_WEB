import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getUserProfiles() {
    return this.http.get<any>(`userProfiles`);
  }

  register(user: User) {
    return this.http.post<any>(`users`, user);
  }

}
