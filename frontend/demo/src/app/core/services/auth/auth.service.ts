import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { LoginUsuario } from '../../models/login-usuario';
import { JwtDTO } from '../../models/jwt-dto';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
