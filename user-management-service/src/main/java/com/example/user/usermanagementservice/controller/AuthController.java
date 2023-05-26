package com.example.user.usermanagementservice.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.usermanagementservice.model.User;
import com.example.user.usermanagementservice.repositories.userRepository;
import com.example.user.usermanagementservice.Services.JWTservice;

// This annotation indicates that this class provides RESTful API endpoints for user authentication
@RestController
@RequestMapping("/auth")
public class AuthController {
    
    // This annotation enables dependency injection of the BCryptPasswordEncoder bean
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // This annotation enables dependency injection of the UserRepository bean
    @Autowired
    private userRepository userRepository;

    // This annotation enables dependency injection of the JwtService bean
    @Autowired
    private JWTservice jwtService;

    // This method handles the user registration endpoint
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody Map<String,String> body){
        String name = (String)body.get("name");
        String email = (String)body.get("username");
        String password = (String)body.get("password");
        String passwordHashed = this.bCryptPasswordEncoder.encode(password);
        String role = (String) body.get("role"); 
        User user = new User();
        user.setName(name);
        user.setUsername(email);
        user.setPassword(passwordHashed);
        user.setRole(role);
        // This line saves the user to the database
        this.userRepository.save(user);

        String token = this.jwtService.generateToken(user.getId());
        Map res = new HashMap<>();
        res.put("token", token);

        // This line returns a response with a token and status code indicating successful creation
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    // This method handles the user login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        User user = this.userRepository.findByUsername(username).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not Exists");
        }
        String password = body.get("password");
        String hashedPassword = user.getPassword();
        boolean matched = this.bCryptPasswordEncoder.matches(password, hashedPassword);
        if (matched) {
            String token = this.jwtService.generateToken(user.getId());
            Map<String, Object> res = new HashMap<>();
            res.put("token", token);
            res.put("message", "Login Success");
            return ResponseEntity.ok(res);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Password not match");
        }
    }
    
}
