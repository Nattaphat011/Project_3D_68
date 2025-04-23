import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',

})
export class ProfileComponent {
  constructor(public auth: AuthService, private router: Router ) {}

  user: any = {};

  ngOnInit(): void {
    // ดึงข้อมูล user ที่ล็อกอินมาแล้วจาก AuthService
    this.user = this.auth.user;
  }

}
