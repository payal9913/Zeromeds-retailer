import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  showpassword = false;
  toggleShow() {
    this.showpassword = !this.showpassword;
  }
  
  submit() {
    window.location.href = 'retailer'
  }
}
