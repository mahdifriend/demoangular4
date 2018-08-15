import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  constructor(public router: Router, private http: HttpClient) { }
  username = 'test';
  password = 'test';
  validationLogin: boolean;
  alert: string;
  display: string;
  titlemsgError: string;
  msgError: string;

  ngOnInit(): void {
/*    this.http.get('http://localhost/login.php').subscribe(data => {
      console.log(data);
    });*/

  }

  onSubmit(f: NgForm) {

    const req = this.http.post('http://localhost/login.php', {
      username: f.value['username'],
      password: f.value['password']
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );


/*    if (f.value['password'] === this.password && f.value['username'] === this.username) {
      this.validationLogin = true;
      this.alert = 'success';
      this.display = 'block';
      this.titlemsgError = 'Connexion Réussit :';
      this.msgError = 'Identifiant et mot de passe sont corrects';
      console.log(this.validationLogin);
      //this.router.navigate(['admin']);

    } else {
      this.validationLogin = false;
      this.alert = 'danger';
      this.display = 'block';
      this.titlemsgError = 'Connexion Échouée :';
      this.msgError = 'Identifiant ou mot de passe erronée';
    }*/
  }
}
