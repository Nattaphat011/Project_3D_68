import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  template: `<h2>บริการของเรา</h2>`,
  styles: [`h2 { padding: 1rem; }`]
})
export class ServiceComponent {
  services = [
    { title: 'ออกแบบเสื้อ 3D', description: 'ปรับแต่งเสื้อในรูปแบบสามมิติได้แบบเรียลไทม์' },
    { title: 'คำนวณราคาอัตโนมัติ', description: 'แสดงราคาทันทีเมื่อมีการเพิ่มข้อความหรือโลโก้' },
    { title: 'จัดการคำสั่งซื้อ', description: 'ระบบสรุปคำสั่งซื้อและชำระเงินออนไลน์' }
  ];
}
