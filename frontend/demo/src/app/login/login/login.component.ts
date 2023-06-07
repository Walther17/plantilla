import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/core/models/login-usuario';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenService } from 'src/app/core/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
   
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
      
        this.tokenService.setToken(data.token);
       
        alert('Login successflu')
         
        this.router.navigate(['/home']);
      },
      err => {
        alert('Password or email invalid')
      this.errMsj = err.error.message;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
        // console.log(err.error.message);
      }
    );
  }
}
