import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UserFormComponent {
  user = { name: '', email: '', phone: '', city: '' };
  baseUrl = 'https://myapp.onrender.com/api/users'; //'http://localhost:8080/api/users'; // later replace with deployed backend

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(this.user);
    this.http.post(this.baseUrl, this.user).subscribe({
      next: (res) => console.log('User saved', res),
      error: (err) => console.error(err),
    });
  }
}
