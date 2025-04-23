import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent   {
  isOpen = true;

  constructor(public auth: AuthService, private router: Router) {
    // ทดลองกำหนด role เพื่อทดสอบ UI
    this.auth.setRole('user'); // เปลี่ยนเป็น 'guest' หรือ 'admin' ตามต้องการ
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);  // กลับหน้า home
  }
  
}