import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModel } from '../login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data:LoginModel;
  public message:string;
  public action:string;
  private readonly DEFAULT_MESSAGE = 'Preencha todos os campos antes de enviar.'
  private readonly DEFAULT_ACTION = 'Enviar';
  constructor(private loginService:AuthService,private router:Router) { }

  ngOnInit() {
    this.message = this.DEFAULT_MESSAGE;
    this.action = this.DEFAULT_ACTION;
    this.data = new LoginModel();
  }

  public async send(){
    // this.loginService.login();
    // this.loginService.login(this.data)  ;
    this.action = 'Enviando...';
    try {
      const response:any = await this.loginService.login(this.data).toPromise();
      this.message = '';
      localStorage.setItem('USER_TOKEN',response.token);
      this.router.navigate(['home']);
    } catch (error) {
      this.message = 'Ocorreu um erro. Tente Novamente';
    }finally{
      this.action = this.DEFAULT_ACTION;
    }
  }

  public isValid(){
    return (this.data.email && this.data.password)
  }
}
