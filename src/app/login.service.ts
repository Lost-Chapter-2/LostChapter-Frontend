import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkLoginStatus() {
    return this.http.get('http://localhost:8081/loginstatus', {
      observe: 'response',
      withCredentials: true,
    });
  }

  login(username: string, password: string) {
    return this.http.post(
      'http://localhost:8081/login',
      {
        access: username,
        password: password,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }

  logout() {
    return this.http.post(
      'http://localhost:8081/logout',
      {},
      {
        observe: 'response',
        withCredentials: true,
        responseType: 'text',
      }
    );
  }
  updateUser() {
    return this.http.put('http://localhost:8081/update', {});
  }
}
