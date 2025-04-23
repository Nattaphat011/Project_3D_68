import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_pj_68';
  constructor(private authService: AuthService) {
    this.authService.setRole('user'); // เปลี่ยนเป็น 'guest' เพื่อทดสอบ
  }

  changeToAdmin() {
  this.authService.setRole('admin');
}
  changeToUser() {
    this.authService.setRole('user');
  }
  changeToGuest() {
    this.authService.setRole('guest');
  }
}
