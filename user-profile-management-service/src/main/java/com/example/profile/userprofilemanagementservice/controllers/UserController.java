package com.example.profile.userprofilemanagementservice.controllers;

import java.sql.Date;
import java.time.LocalDate;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/users")
// @CrossOrigin(origins = "", allowedHeaders = "", allowCredentials = "false")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    public ResponseEntity createUser(@RequestBody Map<String, String> body) {
        User user = new User();
        user.setEmail(body.get("Email"));
        user.setFirstName(body.get("First name"));
        user.setLastName(body.get("Last name"));
        user.setPassword(body.get("Password"));
        user.setPhoneNumber(body.get("Phone"));
        user.setProfilepPicture(body.get("Profile picture"));
        user.setRole(body.get("Role"));
        user.setAddress(body.get("Address"));
        user.setBio(body.get("Bio"));

        String dateOfBirthStr = body.get("Date of birth");
        LocalDate dateOfBirth = LocalDate.parse(dateOfBirthStr);
        Date dateOfBirthAsDate = Date.valueOf(dateOfBirth);
        user.setDateOfBirth(dateOfBirthAsDate);

        this.userRepository.save(user);
        return new ResponseEntity(user, HttpStatus.CREATED);
    }

    @PutMapping("/edit/{userID}")
    public ResponseEntity updateUser(@PathVariable("userID") Long userID, @RequestBody Map<String, String> body)
    {
        User user = this.userRepository.findById(userID).orElse(null);
        if (user == null) {

            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        user.setEmail(body.get("Email"));
        user.setFirstName(body.get("First name"));
        user.setLastName(body.get("Last name"));
        user.setPassword(body.get("Password"));
        user.setPhoneNumber(body.get("Phone"));
        user.setProfilepPicture(body.get("Profile picture"));
        user.setRole(body.get("Role"));
        user.setAddress(body.get("Address"));
        user.setBio(body.get("Bio"));

        String dateOfBirthStr = body.get("Date of birth");
        LocalDate dateOfBirth = LocalDate.parse(dateOfBirthStr);
        Date dateOfBirthAsDate = Date.valueOf(dateOfBirth);
        user.setDateOfBirth(dateOfBirthAsDate);

        this.userRepository.save(user);

        return new ResponseEntity(user, HttpStatus.OK);


    }

    @GetMapping("{userID}")
    public ResponseEntity getUser(@PathVariable("userID") Long userID) {
        User user = this.userRepository.findById(userID).orElse(null);

        if (user == null) {

            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }

}
