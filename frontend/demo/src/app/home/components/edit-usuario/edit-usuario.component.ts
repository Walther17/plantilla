import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Rol } from 'src/app/core/models/rol.model';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit{


  usuarios : Usuario[]

  id: number;

  form: FormGroup;

  roles: Rol[];

  
  
  constructor(
    private usuarioService: UsuarioService, 
    private router: Router, 
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    ) {
      this.buildForm();
    }


  ngOnInit() {
   this.activeRoute.params.subscribe((params: Params)=> {
      this.id = params['id'];
      this.usuarioService.getUsuarioById(this.id).subscribe(dato =>{
        this.form.patchValue(dato);
        console.log(dato);
      },error => console.log(error)); 
    });
    
    this.getAllRoles()
    
   
  }

  updateUser(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const usuario = this.form.value;
      this.usuarioService.updateUsuario(this.id, usuario).subscribe(dato => {
        console.log(dato)
        this.goToListUsers();
      },error => console.log(error));  
    }
    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
    
      nombre: ['', [Validators.required, ]],
      apellido: ['', [Validators.required, Validators.minLength(4), ]],
      estado: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      rol:['', [Validators.required]],

    });
  }

  getAllRoles(): void {
    this.usuarioService.getAllRoles().subscribe(dato => {
      this.roles= dato;
      console.log(dato)
    });
  }


  
  goToListUsers(){
    this.router.navigate(['/home']);
  }

  
}
