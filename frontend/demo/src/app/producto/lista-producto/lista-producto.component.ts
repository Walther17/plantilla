import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/core/models/producto';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import { TokenService } from 'src/app/core/services/token/token.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent  implements OnInit {

  productos: Producto[];
  roles: string[];
  isAdmin = false;
  id: number;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
   this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // cargarProductos(): void {
  //   this.productoService.lista().subscribe(
   
  //     /* data => {
  //       this.productos = data;
  //       console.log(this.productos)
  //     }, */
  //     {  
  //       next: x => console.log('The next value is: ', x),  
  //       error: err => console.error('An error occurred :', err),  
  //       complete: () => console.log('There are no more action happen.')  
  //     });
      
  // }
  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
       this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        }); 
        this.cargarProductos();
      },
      err => {
        alert('Error al borrar')
       this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        }); 
      }
    );
  }

}