import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `<h2>ยินดีต้อนรับสู่หน้าแรก</h2>`,
  styles: [`h2 { padding: 1rem; }`],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
