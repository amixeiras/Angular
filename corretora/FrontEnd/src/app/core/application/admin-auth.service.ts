import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private authenticated = false;

  login(email: string, password: string): boolean {
    this.authenticated = email === 'admin@corretora.com' && password === 'admin123';
    return this.authenticated;
  }

  logout(): void { this.authenticated = false; }
  isAuthenticated(): boolean { return this.authenticated; }
}
