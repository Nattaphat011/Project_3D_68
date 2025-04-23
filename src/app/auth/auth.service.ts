import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/api/auth';
  private currentUserSubject = new BehaviorSubject<any>(null);
   private userRole: string = 'guest';

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) this.currentUserSubject.next(JSON.parse(storedUser));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api}/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      })
    );
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
  
  get user() {
    return this.currentUserSubject.value;
  }  

  get token() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.token;
  }

  hasRole(role: string): boolean {
    return this.user?.role === role;
  }

  setRole(role: 'guest' | 'user' | 'admin') {
    const user = this.user || {};
    user.role = role;
    this.currentUserSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.includes(this.userRole);
  }
  
  isAdmin(): boolean {
    return this.user?.role === 'admin';
  }
  isUser(): boolean {
    return this.user?.role === 'user';
  }
}