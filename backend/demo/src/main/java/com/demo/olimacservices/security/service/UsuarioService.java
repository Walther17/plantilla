package com.demo.olimacservices.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.demo.olimacservices.security.entity.Usuario;
import com.demo.olimacservices.security.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    public boolean existsByNombreUsuario(String nombreUsuario){
        return usuarioRepository.existsByNombreUsuario(nombreUsuario);
    }

    public List<Usuario> getAll(){
        return usuarioRepository.findAll();
    }

    public boolean existsByEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }

    public void save(Usuario usuario){
        usuario.setEstado("A");
        usuarioRepository.save(usuario);
    }

   /*  public Usuario updateUsuario(Usuario usuario, Integer id){

        Optional<Usuario> userExist = usuarioRepository.findById(id);

        if (userExist !=null) {

            Usuario userUpdate = userExist.get();
            userUpdate.setNombre(usuario.getNombre());
            userUpdate.setApellido(usuario.getApellido());
            userUpdate.setEmail(usuario.getEmail());
            userUpdate.setNombreUsuario(usuario.getNombreUsuario());
            userUpdate.setPassword(usuario.getPassword());
            userUpdate.setEstado(usuario.getEstado());


            return usuarioRepository.save(userUpdate);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
            "No se encontró el usuario con el ID especificado: " + id);
        }
    }
    */
}
