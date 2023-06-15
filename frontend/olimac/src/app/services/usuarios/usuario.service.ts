import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioURL = environment.usuarioURL;

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'listar-usuarios');
  }


}
