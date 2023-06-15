import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {

   usuarios: any;
  isAdmin = false;

  constructor(
    private usuariosService: UsuariosService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProductos(): void {
    this.usuariosService.lista().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
