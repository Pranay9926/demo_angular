import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userRole: string;

  constructor() {

    this.userRole = 'admin';
  }

  getRole(): string {
    return this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isUser(): boolean {
    return this.userRole === 'user';
  }

  setRole(role: string): void {
    this.userRole = role;
  }
}
