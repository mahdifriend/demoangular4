import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }
  username = 'test';
  password = 'test';
  validationLogin: boolean;
  alert: string;
  display: string;
  titlemsgError: string;
  msgError: string;

  ngOnInit() {}

  onSubmit(f: NgForm) {
    if (f.value['password'] === this.password && f.value['username'] === this.username) {
      this.validationLogin = true;
      this.alert = 'success';
      this.display = 'block';
      this.titlemsgError = 'Connexion Réussit :';
      this.msgError = 'Identifiant et mot de passe sont corrects';
      console.log(this.validationLogin);
      this.router.navigate(['admin']);
    } else {
      this.validationLogin = false;
      this.alert = 'danger';
      this.display = 'block';
      this.titlemsgError = 'Connexion Échouée :';
      this.msgError = 'Identifiant ou mot de passe erronée';
    }
  }
}
