package com.demo.olimacservices.security.dto;


import org.springframework.security.core.GrantedAuthority;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

// JwtDto se encarga de devolver el token cuando se haces el login
@Data
@NoArgsConstructor
public class JwtDto { // DTO Data Transfer Object
    private String token;
   

   
    public JwtDto(String token) {
        this.token = token;
      
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


}
