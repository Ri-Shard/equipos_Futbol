import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipos_Futbol';
  constructor(private router: Router) {}

  Login() {
    this.router.navigateByUrl('/Login');
  }
}
