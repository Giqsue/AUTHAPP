import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private messageService: MessageService) {} // Agrega 'private router: Router' aquí

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Aquí puedes manejar la respuesta del inicio de sesión.
        // Si es exitoso, redirige al dashboard.
        this.router.navigate(['/dashboard']);
        this.messageService.add({severity:'success', summary: 'Welcome', detail: ':D'});
        
      },
      (error) => {
        // Maneja los errores aquí, por ejemplo, muestra un mensaje de error.
        console.error('Error en el inicio de sesión:', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Wrong credentials'});
        
      }
    );
  }
}


