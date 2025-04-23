import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    this.authService.register(this.registerData).subscribe({
      next: (res: any) => {
        alert('สมัครสมาชิกสำเร็จ');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('เกิดข้อผิดพลาดในการสมัครสมาชิก');
        console.error(err);
      }
    });
  }
}
