package com.example.profile.userprofilemanagementservice.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.profile.userprofilemanagementservice.models.Experience;
import com.example.profile.userprofilemanagementservice.models.User;
import com.example.profile.userprofilemanagementservice.repositories.ExperienceRepository;
import com.example.profile.userprofilemanagementservice.repositories.UserRepository;

@RestController
@RequestMapping("/experience")
public class ExperienceController {

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    public ResponseEntity addExperience(@RequestBody Map<String, String> body) {
        System.out.println("name " + body.get("company name"));
        System.out.println("start " + body.get("start_date"));
        System.out.println("end " + body.get("end_date"));
        Experience experience = new Experience();
        experience.setCompany_name(body.get("company name"));

        String startDateStr = body.get("start_date");
        System.out.println(startDateStr);
        LocalDate startDate = LocalDate.parse(startDateStr);
        Date startDateAsDate = Date.valueOf(startDate);
        experience.setStart_date(startDateAsDate);

        String endDateStr = body.get("end_date");
        LocalDate endDate = LocalDate.parse(endDateStr);
        Date endDateAsDate = Date.valueOf(endDate);
        experience.setEnd_date(endDateAsDate);

        Long userId = Long.valueOf(body.get("user_id"));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        experience.setUser(user);

        this.experienceRepository.save(experience);
        return new ResponseEntity(experience, HttpStatus.CREATED);
    }

    @GetMapping("{userID}")
    public ResponseEntity getUserExperience(@PathVariable("userID") Long userID) {
        List<Experience> experience = this.experienceRepository.findByUser_id(userID);

        if (experience == null) {

            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(experience, HttpStatus.OK);
    }

    @DeleteMapping("/selected/{experienceID}")
    public ResponseEntity deleteExperience(@PathVariable("experienceID") Long experienceID)
    {
        Experience education = this.experienceRepository.findById(experienceID).orElse(null);
        if(education == null){
            
            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        this.experienceRepository.delete(education);

        return new ResponseEntity("Deleted", HttpStatus.OK);
    }
}
