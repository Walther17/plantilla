package com.demo.olimacservices.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.olimacservices.entity.Producto;
import com.demo.olimacservices.security.entity.Usuario;
import com.demo.olimacservices.security.service.UsuarioService;
import com.demo.olimacservices.services.ProductoService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin( "http://localhost:4200")
public class UsuarioController {



     @Autowired
    UsuarioService usuarioService;


      @GetMapping("/listar-usuarios")
    public ResponseEntity<List<Usuario>> list(){
        return ResponseEntity.ok(usuarioService.getAll());
    }

    
    
}
