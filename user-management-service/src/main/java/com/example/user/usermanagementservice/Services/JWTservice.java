package com.example.user.usermanagementservice.Services;


import java.util.Date;

import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class JWTservice {
    private String jwtSecret; 
    private Algorithm algorithm; 
    private long validity; 
    public JWTservice(){
        this.jwtSecret = "THISISASECRET"; 
        this.algorithm = Algorithm.HMAC256(jwtSecret);
        this.validity = 1*24*60*60*1000; 
    }

    public String generateToken(String uuid){
        String token = JWT.create()
        .withSubject(uuid)
        .withExpiresAt(new Date(System.currentTimeMillis()+this.validity))
        .sign(this.algorithm);
        return token; 
    }

    public String extractUUID(String token){
        JWTVerifier jwtverifier = JWT.require(this.algorithm).build(); 
        DecodedJWT decodeJWT = jwtverifier.verify(token); 
        return decodeJWT.getSubject();
    }
}
