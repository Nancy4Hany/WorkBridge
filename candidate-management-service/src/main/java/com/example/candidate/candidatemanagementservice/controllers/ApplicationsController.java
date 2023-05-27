package com.example.candidate.candidatemanagementservice.controllers;

import java.util.Map;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.candidate.candidatemanagementservice.models.Applications;
import com.example.candidate.candidatemanagementservice.models.JobOffer;
import com.example.candidate.candidatemanagementservice.models.User;
import com.example.candidate.candidatemanagementservice.repositories.ApplicationRepository;
import com.example.candidate.candidatemanagementservice.repositories.JobOfferRepository;

import com.example.candidate.candidatemanagementservice.repositories.UserRepository;

@RestController
@RequestMapping("/apply")
public class ApplicationsController {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    public ResponseEntity Apply(@RequestBody Map<String, String> body) {

        Applications application = new Applications();

        application.setName(body.get("name"));
        application.setEmail(body.get("email"));
        application.setPhoneNumber(body.get("phoneNumber"));
        application.setCV(body.get("cv"));

        Long postId = Long.valueOf(body.get("post_id"));
        JobOffer post = JobOfferRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("post not found"));
        application.setPost(post);

        Long userId = Long.valueOf(body.get("user_id"));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        application.setUser(user);

        this.applicationRepository.save(application);
        return new ResponseEntity(application, HttpStatus.CREATED);

    }

}
