import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  /**
   *
   */
  constructor(private authService:AuthService) {
  }

  async onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.authService.login(this.username, this.password);

    // Here, you can implement your login logic, e.g., sending a request to a server for authentication.
  }
}
