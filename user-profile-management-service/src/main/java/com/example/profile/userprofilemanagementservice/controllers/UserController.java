package com.example.profile.userprofilemanagementservice.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.profile.userprofilemanagementservice.models.User;
import com.example.profile.userprofilemanagementservice.repositories.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "", allowedHeaders = "", allowCredentials = "false")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    public ResponseEntity createUser(@RequestBody Map<String, String> body)
    {
        User user = new User();
        user.setEmail(body.get("email"));
        user.setFirst_name(body.get("first name"));
        user.setLast_name(body.get("last name"));
        this.userRepository.save(user);
        return new ResponseEntity(user, HttpStatus.CREATED);
    }

    @GetMapping("{userID}")
    public ResponseEntity getUser(@PathVariable("userID") Long userID) {
        User user = this.userRepository.findById(userID).orElse(null);

        if(user == null){

            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }
    
}
